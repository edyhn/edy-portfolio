import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

// Custom styles for PortableText blocks
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value.alt || 'Blog image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
    normal: ({ children }: any) => <p className="text-zinc-300 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 italic text-zinc-400 bg-white/5 rounded-r-lg my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-zinc-300 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-zinc-300 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-400/30 hover:decoration-indigo-300 transition-all">
          {children}
        </a>
      );
    },
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found | Edy Hartono Nasrah' };
  }
  
  return {
    title: `${post.title} | Edy Hartono Nasrah`,
    description: post.excerpt || "Read this article on Edy's portfolio.",
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(675).url() 
    : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        
        <article className="relative z-10 mx-auto max-w-3xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Writings
          </Link>

          <header className="mb-12">
            <time className="text-indigo-400 font-medium mb-4 block">
              {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            {imageUrl && (
              <div className="w-full aspect-video relative rounded-2xl overflow-hidden mt-8 border border-white/10 shadow-2xl shadow-indigo-900/10">
                <Image 
                  src={imageUrl} 
                  alt={post.title} 
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}
          </header>

          <div className="prose-container text-lg">
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-zinc-500 italic">No content available for this post.</p>
            )}
          </div>
          
          <hr className="border-white/10 my-12" />
          
          <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10">
            <div>
              <h4 className="text-white font-bold mb-1">Edy Hartono Nasrah</h4>
              <p className="text-sm text-zinc-400">Designer & Vibe Coder</p>
            </div>
            <Link 
              href="/#contact"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
