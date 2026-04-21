# 🚀 Panduan Mengelola Portfolio "edy-portfolio"

Selamat! Website portfolio pribadimu sudah jadi. Sistem ini dibangun dengan teknologi super cepat (**Next.js 16 + Turbopack**) dipadukan dengan desain *Glassmorphism* modern dan dikontrol menggunakan CMS (sistem manajemen konten) dari **Sanity**.

Dokumen ini akan memandumu cara mengubah tampilan maupun konten ke depannya tanpa takut merusak kode.

---

## 1. ⚙️ Cara Mengubah Data Pribadi Khusus (Hardcoded)
Beberapa teks tidak dikontrol oleh Sanity secara dinamis, melainkan disimpan langsung di dalam satu file agar lebih terpusat. Misalnya: **Nama, Tagline Utama, Deskripsi Hero, Link Sosial Media**.

*   **File yang harus diubah:** `src/lib/constants.ts`
*   **Cara:** Buka file tersebut di Visual Studio Code, kamu akan melihat variabel `SITE`. Silakan ubah data di dalam tanda `""` dengan milikmu aslimu, semisal nama dari `"Edy Hartono Nasrah"` atau link Instagram. 
*(Pastikan tidak menghapus tanda kutipnya ya!)*

## 2. 📝 Mengelola Konten dengan Sanity (Proyek, Desain, Pengalaman, Blog)
Tidak perlu mengedit kode untuk menambah proyek baru! Semuanya dilakukan lewat visual antarmuka (Sanity Studio).

1.  Pastikan websitemu sedang menyala (`npm run dev`).
2.  Buka browser dan ketik alamat: **http://localhost:3000/studio**
3.  Di menu samping (sidebar), kamu akan menemukan pilihan:
    *   **Project :** Untuk kartu-kartu proyek web / coding di halaman depan.
    *   **Design Work :** Untuk hasil karya desain (poster, branding, UIUX).
    *   **Experience :** Untuk barisan riwayat kerja/magang di bagian About.
    *   **Blog Post :** Untuk membuat artikel panjang di halaman `/blog`.
4.  Klik tombol **Pensil / "Create new"** di kanan atas, isi form dengan data gambar dan teksmu, lalu klik **"Publish"** (tombol hijau di bawah).
5.  *Refresh* halaman depan websitemu, dan karya barumu akan langsung muncul otomatis!

## 3. 🖼️ Mengganti Foto Avatar dan File CV PDF
Untuk aset pribadi, cukup ganti dua file ini saja di dalam folder `public/`:
1.  **Foto Utama:** Siapkan foto potret aslimu (format .png, lebih disarankan yang ukuran kotak seperti 1000x1000 px). Ubah namanya menjadi `edy.png` dan _replace_ (timpa) file lama di folder `public/edy.png`.
2.  **File CV:** Siapkan file resumemu dalam bentuk PDF, beri nama persis `cv.pdf`, dan timpa file lama di folder `public/cv.pdf`.

## 4. 🌐 Tahap Terakhir: Upload (Deploy) ke Internet
Saat kamu sudah puas dengan isi lokal di komputer ini, inilah saatnya menjadikan link-nya publik!

1.  Buka terminal, lalu unggah repositori proyek ini ke **GitHub**:
    ```bash
    git add .
    git commit -m "Siap online: update konten"
    git push
    ```
2.  Pergi ke **Vercel.com**, klik "Add New Project" dan sambungkan dengan GitHub-mu.
3.  **SANGAT PENTING:** Sebelum klik "Deploy" di Vercel, masuk ke bagian *Environment Variables*, lalu tambahkan tiga baris ini persis seperti di komputermu (cek file `.env.local`):
    *   **Name:** `NEXT_PUBLIC_SANITY_PROJECT_ID` **Value:** `nbl3sgka`
    *   **Name:** `NEXT_PUBLIC_SANITY_DATASET` **Value:** `production`
    *   **Name:** `NEXT_PUBLIC_SANITY_API_VERSION` **Value:** `2025-01-01`
4.  Klik **Deploy** 🎉
5.  Setelah dapat link Vercel (misal: `https://edy-portfolio.vercel.app`), jangan lupa buka website [*sanity.io/manage*](https://sanity.io/manage) -> Tab API -> CORS Origins -> Tambahkan URL Vercel-mu & centang "Allow Credentials".

---

*Hati-hati dan selamat berkarya! Jika terjadi error tak terduga, kamu selalu bisa melakukan Undo (Ctrl+Z) atau bertanya kembali ke asisten AI.*
