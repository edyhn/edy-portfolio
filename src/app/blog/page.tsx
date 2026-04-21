import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import type { SanityPost } from "@/lib/types";

export const metadata = {
  title: "Writing | Edy Hartono Nasrah",
  description: "Thoughts, tutorials, and insights on design and engineering.",
};

export default async function BlogIndex() {
  let posts: SanityPost[] = [];

  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
        {/* Ambient background */}
        <div className="pointer-events-none absolute top-40 left-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-[90px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Writing
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Pikiran, wawasan, dan tutorial seputar penggabungan antara desain visual dan web engineering.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center border border-white/5 rounded-2xl bg-white/5">
              <p className="text-zinc-500">Belum ada artikel yang dipublikasikan.</p>
              <Link href="/studio" className="text-indigo-400 hover:underline mt-2 inline-block">
                Tulis artikel di Sanity Studio
              </Link>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => {
                const imageUrl = post.mainImage 
                  ? urlFor(post.mainImage).width(800).height(400).url() 
                  : null;
                  
                return (
                  <Link href={`/blog/${post.slug}`} key={post._id} className="group block">
                    <article className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
                      
                      {imageUrl && (
                        <div className="w-full md:w-1/3 aspect-video md:aspect-square lg:aspect-video relative overflow-hidden rounded-xl shrink-0">
                          <Image 
                            src={imageUrl} 
                            alt={post.title} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 flex flex-col justify-center">
                        <time className="text-sm text-indigo-400 font-medium mb-2">
                          {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3 leading-tight">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-zinc-400 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 text-sm font-medium text-white/60 group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
                          Read article &rarr;
                        </div>
                      </div>
                      
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
