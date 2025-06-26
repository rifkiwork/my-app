import { Button } from "@/components/ui/button";
import { ImageIcon, User } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section aria-label="hero-section" className="bg-black px-10">
        <div className="h-[800px] grid grid-cols-2 text-white place-items-center">
          <div className="space-y-5 max-w-[650px]">
            <span className="text-gray-400 font-bold text-xl">TEUAS UPI</span>
            <h1 className="text-6xl font-bold tracking-wide leading-[72px]">
              Membangun Koneksi, Berbagi Ilmu, Meraih Masa Depan
            </h1>
            <p className="text-gray-400">
              TEUAS hadir untuk mempererat jaringan alumni, mendukung mahasiswa,
              dan membuka peluang karir bagi lulusan Teknik Elektro UPI
            </p>
            <Button size="lg" className="bg-orange-600">
              Gabung Sekarang
            </Button>
          </div>
          <div>
            <div className="bg-gray-500 h-[500px] w-[500px] rounded-2xl flex items-center justify-center">
              <User className="h-32 w-32" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="about-section" className="px-10">
        <div className="h-[800px] grid grid-cols-2 place-items-center">
          <div className="space-y-5 max-w-[750px]">
            <span className="text-orange-400 font-bold text-xl">IKA TEUAS</span>
            <h1 className="text-6xl font-bold tracking-wide leading-[72px]">
              TEKNIK ELEKTRO UNITY AND SOLIDARITY
            </h1>
            <p className="text-gray-400">
              IKA TEUAS adalah komunitas alumni Teknik Elektro UPI yang bertahan
              membangun jaringan professional, berbagi pengalaman, serta membuka
              peluang bagi mahasiswa dan alumni dalam dunia kerja.
            </p>
            <Button size="lg" className="bg-orange-600">
              Gabung Sekarang
            </Button>
          </div>
          <div>
            <div className="bg-gray-500 h-[500px] w-[500px] rounded-2xl flex items-center justify-center">
              <ImageIcon className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="commitment-section" className="px-10">
        <div className="h-[400px] flex items-center justify-center">
          <div className="flex justify-center flex-col items-center text-center space-y-3 max-w-[800px]">
            <span className="text-orange-400 font-bold text-xl">
              KOMITMEN TEUAS
            </span>
            <h1 className="text-6xl font-bold tracking-wide leading-[72px]">
              Fokus Utama Kami
            </h1>
            <p className="text-gray-400">
              IKA TEUAS hadir untuk membangun jaringanalumni yang solid,
              mendukung prestasi mahasiswa, membuka peluang karir, dan
              memberikan akses pembelajaran bagi lulusan Tekik Elektro UPI.
              Jelajahi fitur utama kami dan temukan manfaatnya untuk masa
              depannmu!
            </p>
          </div>
        </div>
      </section>

      <section aria-label="testimony-section" className="px-10">
        <div className="h-[800px] grid grid-cols-2 place-items-center">
          <div>
            <div className="bg-gray-500 h-[500px] w-[500px] rounded-2xl flex items-center justify-center">
              <ImageIcon className="h-32 w-32 text-white" />
            </div>
          </div>
          <div className="space-y-5 max-w-[750px]">
            <span className="text-orange-400 font-bold text-xl">
              TESTIMONI ALUMNI
            </span>
            <h1 className="text-6xl font-bold tracking-wide leading-[72px]">
              Cerita Sukses Alumni TEUAS
            </h1>
            <p className="text-gray-400">
              Jaringan alumni Teknik Elektro UPI telah membantu banyak lulusan
              dalam membangun karir, memperluas koneksi, dan mendapatkan wawasan
              industri. Simak kisah inspiratif para alumni yang telah meraih
              kesuksesan di berbagai bidang!
            </p>
            <Button size="lg" className="bg-orange-600">
              Gabung Sekarang
            </Button>
          </div>
        </div>
      </section>

      <section
        aria-label="news-section"
        className="px-10 bg-emerald-900 rounded-t-4xl"
      >
        <div className="h-fit py-10 space-y-10">
          <div className="flex justify-between">
            <h1 className="text-6xl font-bold tracking-wide leading-[72px] text-white">
              Berita & Kegiatan
            </h1>
            <Button className="bg-orange-600 " size="lg">
              Lebih Lanjut
            </Button>
          </div>
          <div className="overflow-x-scroll py-4">
            <div className="flex gap-10 w-fit">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-gray-400 h-[500px] w-[400px] rounded-2xl flex items-center justify-center"
                >
                  <ImageIcon className="h-32 w-32 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
