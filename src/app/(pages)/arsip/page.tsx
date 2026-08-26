import Image from "next/image";
import Link from "next/link";

interface ArchiveItem {
  id: string;
  year: string;
  themeName: string;
  subTitle: string;
  fullTitle: string;
  bgImage: string;
  logoImage: string;
  externalUrl: string;
}

const archiveData: ArchiveItem[] = [
  {
    id: "omb-2021",
    year: "2021",
    themeName: "Cala Sahita",
    subTitle: "Pameran Dokumentasi",
    fullTitle: "OMB UMN 2021",
    bgImage: "/logoArsip/bgArsip/bg2021.webp",
    logoImage: "/logoArsip/calasahita.webp",
    externalUrl: "https://doc.umn.ac.id/calasahita",
  },
  {
    id: "omb-2022",
    year: "2022",
    themeName: "Kartala",
    subTitle: "Pameran Dokumentasi",
    fullTitle: "OMB UMN 2022",
    bgImage: "/logoArsip/bgArsip/bg2022.webp",
    logoImage: "/logoArsip/kartala.webp",
    externalUrl: "https://doc.umn.ac.id/kartala",
  },
  {
    id: "omb-2023",
    year: "2023",
    themeName: "Ananta",
    subTitle: "Pameran Dokumentasi",
    fullTitle: "OMB UMN 2023",
    bgImage: "/logoArsip/bgArsip/bg2023.webp",
    logoImage: "/logoArsip/Ananta.webp",
    externalUrl: "https://doc.umn.ac.id/ananta",
  },
  {
    id: "omb-2024",
    year: "2024",
    themeName: "Meliora",
    subTitle: "Pameran Dokumentasi",
    fullTitle: "OMB UMN 2024",
    bgImage: "/logoArsip/bgArsip/bg2024.webp",
    logoImage: "/logoArsip/Meliora.webp",
    externalUrl: "https://doc.umn.ac.id/meliora",
  },
  {
    id: "omb-2025",
    year: "2025",
    themeName: "Aeterna",
    subTitle: "Pameran Dokumentasi",
    fullTitle: "OMB UMN 2025",
    bgImage: "/logoArsip/bgArsip/bg2025.webp",
    logoImage: "/logoArsip/aeterna.webp",
    externalUrl: "https://doc.umn.ac.id/aeterna",
  },
];

export default function ArsipPage() {
  return (
    <main className="min-h-screen bg-[url('/gradients/grad3.webp')] bg-cover text-white py-16 px-4 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12 mt-16">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-3">
          Arsip OMB UMN
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
          Kumpulan dokumentasi, momen bersejarah, dan rekam jejak pelaksanaan Orientasi Mahasiswa Baru Universitas Multimedia Nusantara lintas generasi.
        </p>
      </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
        {archiveData.map((item) => (
            <a
            key={item.id}
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm sm:max-w-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group relative aspect-[4/3.5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="relative w-full h-full opacity-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                src={item.bgImage}
                alt={`Background ${item.fullTitle}`}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                <div className="relative w-56 sm:w-64 h-32 sm:h-36 transition-transform duration-300 group-hover:scale-105">
                <Image
                    src={item.logoImage}
                    alt={`Logo ${item.themeName}`}
                    fill
                    className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                />
                </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20 max-w-[85%]">
              <div className="bg-[#111827]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 shadow-lg transition-colors duration-300 group-hover:bg-[#1a2333]">
                <p className="text-white/90 text-sm font-light tracking-wide leading-tight">
                  {item.subTitle}
                </p>
                <p className="text-white text-base font-semibold tracking-wide leading-tight mt-0.5">
                  {item.fullTitle}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}