"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import image1 from "./images/car2.webp";
import image2 from "./images/car3.webp";
import image3 from "./images/car4.webp";

const values = [
  {
    number: "",
    title: "Resiliensi",
    description:
      "Dalam memasuki dunia perkuliahan yang baru, mahasiswa akan menghadapi berbagai tantangan akademik maupun non-akademik. Nilai resiliensi perlu ditanamkan sebagai upaya agar Pejuang Kembang Sepatu untuk tetap bangkit, bertahan, dan berkembang di tengah berbagai kesulitan yang dihadapi.",
  },
  {
    number: "",
    title: "Adaptabilitas",
    description:
      "Seperti Kembang Sepatu yang mampu beradaptasi pada kondisi lingkungan yang berbeda-beda, para Pejuang Kembang Sepatu diharapkan mampu menyesuaikan diri terhadap lingkungan kampus, budaya baru, serta berbagai perubahan yang akan ditemui selama masa perkuliahan.",
  },
  {
    number: "",
    title: "Pertumbuhan",
    description:
      "Setiap pengalaman dan tantangan yang dihadapi selama mengikuti rangkaian UMN NEXT 2026 menjadi bagian dari proses pembelajaran dan pengembangan diri. Melalui proses tersebut, harapannya Pejuang Kembang Sepatu juga didorong untuk terus bertumbuh menjadi pribadi yang lebih baik dan bermakna.",
  },
];

const documentationCards: Array<{
  title: string;
  label: string;
  image: StaticImageData;
  gradient: string;
}> = [
  {
    title: "Hari 1 Pameran Fiorella",
    label: "Arsip Foto",
    image: image1,
    gradient: "from-[#121E42]/95 via-[#364A8C]/45 to-transparent",
  },
  {
    title: "Hari 2 Pameran Fiorella",
    label: "Arsip Foto",
    image: image2,
    gradient: "from-[#364A8C]/95 via-[#6590C2]/35 to-transparent",
  },
  {
    title: "Penayangan After Movie",
    label: "Arsip Video",
    image: image3,
    gradient: "from-[#121E42]/95 via-[#121E42]/35 to-transparent",
  },
];

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const SectionHeader = ({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) => (
  <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
    {eyebrow ? (
      <p
        className={`mb-3 text-[11px] font-bold uppercase tracking-[0.28em] ${
          dark ? "text-[#364A8C]" : "text-[#A8C4D4]"
        }`}
      >
        {eyebrow}
      </p>
    ) : null}
    <h2
      className={`font-serif text-3xl font-normal leading-none tracking-[-0.04em] md:text-5xl ${
        dark ? "text-[#121E42]" : "text-[#EDECE6]"
      }`}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={`mx-auto mt-3 max-w-2xl text-xs leading-relaxed md:mt-4 md:text-base ${
          dark ? "text-[#121E42]/70" : "text-[#EDECE6]/75"
        }`}
      >
        {description}
      </p>
    ) : null}
  </div>
);

const ValueShowcase = () => {
  return (
    <div className="flex w-full max-w-6xl mx-auto flex-col gap-6 md:gap-8">
      <div className="grid w-full items-center gap-5 lg:grid-cols-[1fr_0.85fr_1fr] lg:gap-6">
        <article className="group relative order-1 h-full overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-5 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#EDECE6]/15 sm:p-6 md:rounded-[2rem] md:p-7">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A8C4D4]/20 blur-2xl transition group-hover:bg-[#A8C4D4]/30" />
          <span className="font-serif text-4xl leading-none text-[#A8C4D4]/70 md:text-5xl">
            {values[0].number}
          </span>
          <h3 className="mt-3 font-serif text-2xl font-normal tracking-[-0.03em] text-[#EDECE6] md:text-3xl">
            {values[0].title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#EDECE6]/72 md:text-base text-justify">
            {values[0].description}
          </p>
        </article>

        <div className="relative order-3 mx-auto mt-4 mb-4 hidden aspect-square w-full max-w-[220px] items-center justify-center rounded-full border border-[#EDECE6]/20 bg-[#EDECE6]/10 p-6 shadow-[0_30px_90px_rgba(18,30,66,0.28)] backdrop-blur-md sm:max-w-[260px] lg:order-2 lg:my-0 lg:flex md:max-w-[340px]">
          <div className="absolute inset-4 rounded-full border border-dashed border-[#EDECE6]/24" />
          <div className="absolute inset-10 rounded-full bg-[#EDECE6]/12 blur-xl" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[#EDECE6] p-6 shadow-2xl md:h-48 md:w-48">
            <Image
              src="/logo/fiorella-blue-mark.png"
              alt="Logo Fiorella"
              fill
              sizes="208px"
              className="object-contain p-6"
            />
          </div>
        </div>

        <article className="group relative order-2 h-full overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-5 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#EDECE6]/15 sm:p-6 md:rounded-[2rem] md:p-7 lg:order-3">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A8C4D4]/20 blur-2xl transition group-hover:bg-[#A8C4D4]/30" />
          <span className="font-serif text-4xl leading-none text-[#A8C4D4]/70 md:text-5xl">
            {values[1].number}
          </span>
          <h3 className="mt-3 font-serif text-2xl font-normal tracking-[-0.03em] text-[#EDECE6] md:text-3xl">
            {values[1].title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#EDECE6]/72 md:text-base text-justify">
            {values[1].description}
          </p>
        </article>
      </div>

      <article className="group relative w-full overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-5 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#EDECE6]/15 sm:p-6 md:rounded-[2rem] md:p-8">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#A8C4D4]/20 blur-3xl transition group-hover:bg-[#A8C4D4]/30" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:gap-8 lg:gap-12">
          <div className="shrink-0">
            <span className="font-serif text-4xl leading-none text-[#A8C4D4]/70 md:text-5xl">
              {values[2].number}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-normal tracking-[-0.03em] text-[#EDECE6] md:text-3xl">
              {values[2].title}
            </h3>
          </div>
          <div className="hidden h-24 w-px bg-[#EDECE6]/20 md:block" />
          <div className="h-px w-full bg-[#EDECE6]/20 md:hidden" />
          <p className="text-xs leading-relaxed text-[#EDECE6]/72 md:text-base text-justify">
            {values[2].description}
          </p>
        </div>
      </article>

      <div className="relative mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-full border border-[#EDECE6]/20 bg-[#EDECE6]/10 p-6 shadow-[0_30px_90px_rgba(18,30,66,0.28)] backdrop-blur-md sm:max-w-[260px] lg:hidden">
        <div className="absolute inset-4 rounded-full border border-dashed border-[#EDECE6]/24" />
        <div className="absolute inset-10 rounded-full bg-[#EDECE6]/12 blur-xl" />
        <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[#EDECE6] p-6 shadow-2xl">
          <Image
            src="/logo/fiorella-blue-mark.png"
            alt="Logo Fiorella"
            fill
            sizes="208px"
            className="object-contain p-6"
          />
        </div>
      </div>
    </div>
  );
};

const DocumentationCard = ({
  title,
  label,
  image,
  gradient,
  index,
}: {
  title: string;
  label: string;
  image: StaticImageData;
  gradient: string;
  index: number;
}) => (
  <article className="group relative w-full overflow-hidden rounded-[1.5rem] shadow-2xl shadow-[#121E42]/20 md:rounded-[2.5rem]">
    <div className="relative h-64 w-full sm:h-72 md:h-[320px]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#121E42]/85 via-[#121E42]/25 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(237,236,230,0.25),transparent_28%)] opacity-70" />
    </div>

    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#EDECE6]/30 bg-[#EDECE6]/14 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#EDECE6] backdrop-blur-md md:px-4 md:py-2 md:text-[10px]">
          {label}
        </span>
        <span className="font-serif text-3xl leading-none text-[#EDECE6]/30 md:text-5xl">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8C4D4] md:mb-2 md:text-xs">
            Dokumentasi Fiorella
          </p>
          <h3 className="max-w-lg font-serif text-xl font-normal leading-tight tracking-[-0.035em] text-[#EDECE6] md:text-4xl">
            {title}
          </h3>
        </div>
        <Link
          href="#"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EDECE6] px-4 py-2 text-xs font-bold text-[#121E42] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white md:gap-3 md:px-6 md:py-3 md:text-sm"
        >
          Akses Drive
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </article>
);

export default function TentangFiorellaPage() {
  return (
    <main className="relative w-full h-[100dvh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans text-[#EDECE6]">
      
      {/* 
        WRAPPER BACKGROUND UTUH 
        Div ini membungkus semua section dan menerapkan grad5_v.png.
        Background ini diregangkan (size:100%_100%) dari atas section 1 sampai bawah section 3,
        sehingga akan ikut ter-scroll secara natural seiring pengguna scroll ke bawah.
      */}
      <div className="relative w-full bg-[url('/gradients/tentang/grad1_v.png')] bg-[size:100%_100%] bg-top bg-no-repeat">
        
        <section className="relative z-10 flex min-h-[100dvh] w-full snap-start snap-always flex-col justify-center px-5 pt-24 pb-12 sm:px-6 md:px-8 md:py-8">
          <div className="relative z-10 mx-auto w-full max-w-6xl space-y-5 md:space-y-6">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#EDECE6] p-6 text-[#121E42] shadow-[0_30px_90px_rgba(18,30,66,0.28)] sm:p-7 md:rounded-[2.5rem] md:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A8C4D4]/55 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white/28 to-transparent" />

              <div className="relative grid items-center gap-6 lg:grid-cols-[0.6fr_1fr] lg:gap-10">
                <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center text-center">
                  <div className="relative aspect-[4/3] w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px]">
                    <Image
                      src="/logo/fiorella-blue-mark.png"
                      alt="Logo Fiorella"
                      fill
                      priority
                      sizes="360px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="relative flex flex-col justify-center">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#364A8C] md:text-[11px]"></p>
                  <h1 className="font-serif text-4xl font-normal leading-tight tracking-[-0.02em] text-[#6590C2] sm:text-5xl md:text-7xl">
                    Fiorella
                  </h1>
                  <p className="mb-4 mt-1 font-serif text-lg italic tracking-[-0.02em] text-[#364A8C] sm:text-xl md:text-2xl">
                    "bunga kecil"
                  </p>
                  <p className="max-w-2xl text-xs leading-relaxed text-[#121E42]/80 md:text-sm lg:text-base text-justify">
                    Fiorella merupakan pameran dokumentasi UMN NEXT yang dipersembahkan oleh divisi Sanchita atau dokumentasi. Berasal dari bahasa Italia, Fiorella didefinisikan sebagai bunga kecil yang menjadi representasi dari peserta yang akan mengambil langkah pertama menuju dunia perkuliahan dan melewati proses pertumbuhan sehingga terus berkembang selayaknya sebuah bunga yang tumbuh dari benih yang kecil hingga mekar.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#EDECE6]/95 p-5 text-[#121E42] shadow-2xl shadow-[#121E42]/16 transition duration-300 hover:-translate-y-1 sm:p-6 md:rounded-[2rem] md:p-7">
                <h2 className="font-serif text-2xl font-normal tracking-[-0.035em] text-[#121E42] md:text-3xl">
                  Tema Besar
                </h2>
                <h3 className="mt-1 font-serif text-lg italic text-[#6590C2]">
                  “Transformasi melalui Adaptasi”
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#121E42]/75 md:text-sm text-justify">
                  Tema ini menggambarkan perjalanan seorang mahasiswa baru yang mengalami berbagai perubahan saat memasuki dunia perkuliahan. Seperti bunga kembang sepatu yang mampu tumbuh dan berkembang dalam berbagai kondisi lingkungan, seperti peserta UMN NEXT 2026 yang diharapkan mampu beradaptasi, menghadapi tantangan, dan terus berkembang menjadi pribadi yang lebih baik di dunia perkuliahan.
                </p>
              </article>

              <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#A8C4D4] p-5 text-[#121E42] shadow-2xl shadow-[#121E42]/16 transition duration-300 hover:-translate-y-1 sm:p-6 md:rounded-[2rem] md:p-7">
                <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#EDECE6]/50 blur-2xl" />
                <div className="relative">
                  <h2 className="font-serif text-2xl font-normal tracking-[-0.035em] text-[#121E42] md:text-3xl">
                    Konsep Besar
                  </h2>
                  <h3 className="mt-1 font-serif text-lg italic text-[#364A8C]">
                    “The Traces of Becoming”
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#121E42]/75 md:text-sm text-justify">
                    Konsep ini melambangkan proses yang dilalui oleh Pejuang Kembang Sepatu dalam memasuki dunia perkuliahan. Seperti bunga yang awal mula tumbuh dari sebuah benih menjadi bunga yang mekar, Pejuang Kembang Sepatu juga melalui proses pertumbuhan yang panjang dimana setiap langkah berharga. Pameran dirancang sebagai ruang refleksi yang mampu membawa peserta kembali menelusuri perjalanan mereka.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative z-10 flex min-h-[100dvh] h-max w-full snap-start snap-always flex-col justify-center px-5 pt-28 pb-24 sm:px-6 md:px-8 md:pt-30">
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <SectionHeader
              title="Filosofi dan Nilai"
              description="Filosofi adaptasi dan nilai-nilai utama disusun sebagai panduan membaca pameran: bagaimana momen bertumbuh, saling terhubung, lalu terekam menjadi jejak yang bisa dikunjungi kembali."
            />
            
            <div className="mt-4 flex flex-col gap-6 md:mt-8 md:gap-10">
              <article className="group relative w-full overflow-hidden rounded-[1.5rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-6 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:bg-[#EDECE6]/15 md:rounded-[2rem] md:p-8 lg:p-10">
                <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#A8C4D4]/20 blur-3xl transition group-hover:bg-[#A8C4D4]/30" />
                <div className="relative">
                  <div className="flex flex-col gap-2 border-b border-[#EDECE6]/20 pb-4 md:flex-row md:items-end md:justify-between md:pb-6">
                    <h3 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#EDECE6] md:text-4xl">
                      Filosofi
                    </h3>
                    <span className="font-serif text-sm italic text-[#A8C4D4] md:text-lg">
                      “Adaptasi yang Membawa Transformasi”
                    </span>
                  </div>
                  <div className="mt-4 grid gap-4 text-xs leading-relaxed text-[#EDECE6]/80 md:mt-6 md:grid-cols-2 md:gap-8 md:text-sm lg:text-base text-justify">
                    <p>
                      Filosofi ini terinspirasi dari Bunga Kembang Sepatu yang mampu tumbuh dan berkembang di berbagai kondisi lingkungan. Kemampuannya untuk menyesuaikan diri terhadap perubahan mencerminkan perjalanan mahasiswa baru yang sedang memasuki fase kehidupan yang berbeda dari sebelumnya.
                    </p>
                    <p>
                      Sebagai Pejuang Kembang Sepatu, peserta UMN NEXT 2026 diajak untuk memahami bahwa setiap tantangan, perubahan, dan pengalaman baru merupakan bagian dari proses adaptasi yang akan membentuk pertumbuhan diri. Mahasiswa tidak hanya belajar bertahan, tetapi juga siap menghadapi kehidupan perkuliahan.
                    </p>
                  </div>
                </div>
              </article>

              <ValueShowcase />
            </div>
          </div>
        </section>

        <section className="relative z-10 flex min-h-[100dvh] w-full snap-start snap-always flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 md:px-8 md:py-26 md:pt-30">
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <SectionHeader
              title="Dokumentasi"
              description="Kumpulan dokumentasi disusun agar pengunjung dapat mengakses kembali foto, video, dan suasana penting Fiorella secara ringkas."
            />
            <div className="space-y-4 md:space-y-6">
              {documentationCards.map((card, index) => (
                <DocumentationCard
                  key={card.title}
                  title={card.title}
                  label={card.label}
                  image={card.image}
                  gradient={card.gradient}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}