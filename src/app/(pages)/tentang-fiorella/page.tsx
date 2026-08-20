import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import image1 from "./images/car2.webp";
import image2 from "./images/car3.webp";
import image3 from "./images/car4.webp";

const values = [
  {
    number: "01",
    title: "Bertumbuh",
    description:
      "Setiap karya menjadi ruang untuk melihat proses, keberanian, dan perubahan kecil yang membentuk perjalanan bersama.",
  },
  {
    number: "02",
    title: "Terhubung",
    description:
      "Fiorella merangkai manusia, suasana, dan cerita agar momen yang terlihat personal dapat dirasakan sebagai pengalaman kolektif.",
  },
  {
    number: "03",
    title: "Terekam",
    description:
      "Dokumentasi tidak berhenti sebagai arsip; ia menjadi jejak yang menjaga detail, emosi, dan makna acara tetap hidup.",
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
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p
      className={`mb-4 text-[11px] font-bold uppercase tracking-[0.28em] ${
        dark ? "text-[#364A8C]" : "text-[#A8C4D4]"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`font-serif text-4xl font-normal leading-none tracking-[-0.04em] md:text-6xl ${
        dark ? "text-[#121E42]" : "text-[#EDECE6]"
      }`}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={`mx-auto mt-5 max-w-2xl text-sm leading-relaxed md:text-base ${
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
    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 lg:grid-cols-[1fr_0.85fr_1fr]">
      {/* Garis tengah di-comment di sini (hilangkan tanda komentar untuk memunculkan kembali) */}
      {/* <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[1px] w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#EDECE6]/30 to-transparent lg:block" /> */}

      {/* 1. Nilai 01 & 02 (Order 1 di Mobile & Desktop) */}
      <div className="order-1 space-y-6 lg:order-1 lg:pr-4">
        {values.slice(0, 2).map((value) => (
          <article
            key={value.number}
            className="group relative overflow-hidden rounded-[2rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-6 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#EDECE6]/15 md:p-7"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A8C4D4]/20 blur-2xl transition group-hover:bg-[#A8C4D4]/30" />
            <span className="font-serif text-5xl leading-none text-[#A8C4D4]/70">
              {value.number}
            </span>
            <h3 className="mt-5 font-serif text-3xl font-normal tracking-[-0.03em] text-[#EDECE6]">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#EDECE6]/72 md:text-base">
              {value.description}
            </p>
          </article>
        ))}
      </div>

      {/* 2. Nilai 03 & Kesimpulan (Order 2 di Mobile, Order 3 di Desktop) */}
      <div className="order-2 space-y-6 lg:order-3 lg:pl-4">
        {values.slice(2).map((value) => (
          <article
            key={value.number}
            className="group relative overflow-hidden rounded-[2rem] border border-[#EDECE6]/16 bg-[#EDECE6]/10 p-6 shadow-2xl shadow-[#121E42]/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#EDECE6]/15 md:p-7"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A8C4D4]/20 blur-2xl transition group-hover:bg-[#A8C4D4]/30" />
            <span className="font-serif text-5xl leading-none text-[#A8C4D4]/70">
              {value.number}
            </span>
            <h3 className="mt-5 font-serif text-3xl font-normal tracking-[-0.03em] text-[#EDECE6]">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#EDECE6]/72 md:text-base">
              {value.description}
            </p>
          </article>
        ))}
      </div>

      {/* 3. Logo Fiorella (Order 3 di Mobile / Paling Bawah, Order 2 di Desktop / Tengah) */}
      <div className="order-3 relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border border-[#EDECE6]/20 bg-[radial-gradient(circle_at_50%_42%,rgba(168,196,212,0.32),rgba(237,236,230,0.08)_44%,rgba(18,30,66,0.18)_70%)] p-8 shadow-[0_30px_90px_rgba(18,30,66,0.28)] lg:order-2">
        <div className="absolute inset-6 rounded-full border border-dashed border-[#EDECE6]/24" />
        <div className="absolute inset-14 rounded-full bg-[#EDECE6]/12 blur-xl" />
        <div className="relative grid h-44 w-44 place-items-center rounded-full bg-[#EDECE6] p-8 shadow-2xl md:h-52 md:w-52">
          <Image
            src="/logo/Logo_Blue.png"
            alt="Logo Fiorella"
            fill
            sizes="208px"
            className="object-contain p-8"
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
  <article
    className="group relative w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#121E42]/20 md:rounded-[2.5rem]"
  >
    <div className="relative h-72 w-full md:h-[430px]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(237,236,230,0.25),transparent_28%)] opacity-70" />
    </div>

    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#EDECE6]/30 bg-[#EDECE6]/14 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#EDECE6] backdrop-blur-md">
          {label}
        </span>
        <span className="font-serif text-5xl leading-none text-[#EDECE6]/30">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#A8C4D4]">
            Dokumentasi Fiorella
          </p>
          <h3 className="max-w-lg font-serif text-3xl font-normal leading-tight tracking-[-0.035em] text-[#EDECE6] md:text-5xl">
            {title}
          </h3>
        </div>
        <Link
          href="#"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#EDECE6] px-5 py-3 text-sm font-bold text-[#121E42] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white md:px-6"
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
    <main className="relative min-h-screen overflow-hidden bg-[#121E42] font-sans text-[#EDECE6]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(101,144,194,0.42),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(168,196,212,0.22),transparent_28%),linear-gradient(155deg,#121E42_0%,#24386F_52%,#364A8C_100%)] px-4 py-24 md:px-8 md:py-32">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#6590C2]/18 blur-3xl" />
        <div className="pointer-events-none absolute bottom-8 right-0 h-96 w-96 rounded-full bg-[#A8C4D4]/14 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl space-y-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#EDECE6] p-8 text-[#121E42] shadow-[0_30px_90px_rgba(18,30,66,0.28)] md:rounded-[3rem] md:p-14 lg:p-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A8C4D4]/55 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white/28 to-transparent" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-14">
              <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
                <div className="relative mb-3 aspect-[4/3] w-full max-w-[400px]">
                  <Image
                    src="/logo/Logo_Blue.png"
                    alt="Fiorella Logo"
                    fill
                    priority
                    sizes="360px"
                    className="object-contain"
                  />
                </div>
                <p className="font-serif text-2xl italic tracking-[-0.02em] text-[#6590C2] md:text-3xl">
                  “bunga kecil”
                </p>
              </div>

              <div className="relative">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#364A8C]">
                  Tentang Pameran
                </p>
                <h1 className="font-serif text-5xl font-normal leading-none tracking-[-0.055em] text-[#121E42] md:text-7xl">
                  Merangkai momen menjadi cerita yang mekar.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#121E42]/72 md:text-lg">
                  Fiorella adalah sebuah pameran foto dan video yang menampilkan dokumentasi lengkap dari sebuah kegiatan besar. Melalui lensa para fotografer berbakat, kami mengabadikan setiap momen berharga yang terjadi selama acara berlangsung.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem] border border-[#EDECE6]/16 bg-[#EDECE6]/95 p-7 text-[#121E42] shadow-2xl shadow-[#121E42]/16 transition duration-300 hover:-translate-y-1 md:p-9">
              <div className="absolute right-6 top-6 font-serif text-6xl leading-none text-[#A8C4D4]/50">
                01
              </div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#121E42] md:text-4xl">
                Tema Besar
              </h2>
              <br></br>
              <p className="mt-4 text-sm leading-relaxed text-[#121E42]/72 md:text-base">
                Tema besar Fiorella menjadi payung cerita yang menyatukan dokumentasi visual, suasana acara, dan pengalaman peserta ke dalam satu alur yang mudah dipahami pengunjung.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-[2rem] border border-[#EDECE6]/16 bg-[#A8C4D4] p-7 text-[#121E42] shadow-2xl shadow-[#121E42]/16 transition duration-300 hover:-translate-y-1 md:p-9">
              <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#EDECE6]/50 blur-2xl" />
              <div className="absolute right-6 top-6 font-serif text-6xl leading-none text-[#EDECE6]/55">
                02
              </div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#121E42] md:text-4xl">
                Konsep Besar
              </h2>
              <br></br>
              <p className="relative mt-4 text-sm leading-relaxed text-[#121E42]/72 md:text-base">
                Konsep besar Fiorella mengolah dokumentasi sebagai ruang apresiasi: rapi sebagai arsip, hangat sebagai kenangan, dan tetap ekspresif sebagai karya pameran.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_22%,rgba(237,236,230,0.16),transparent_26%),radial-gradient(circle_at_82%_68%,rgba(168,196,212,0.34),transparent_30%),linear-gradient(160deg,#364A8C_0%,#6590C2_58%,#A8C4D4_100%)] px-4 py-24 md:px-8 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#364A8C]/45 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <SectionHeader
            eyebrow=""
            title="Nilai Utama"
            description="Nilai utama disusun sebagai panduan membaca pameran: bagaimana momen bertumbuh, saling terhubung, lalu terekam menjadi jejak yang bisa dikunjungi kembali."
          />

          <ValueShowcase />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_8%,rgba(168,196,212,0.55),transparent_28%),linear-gradient(180deg,#EDECE6_0%,#DCE7EB_42%,#121E42_100%)] px-4 py-24 md:px-8 md:py-32">
        <div className="pointer-events-none absolute -right-28 top-12 h-80 w-80 rounded-full bg-[#6590C2]/25 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeader
            eyebrow=""
            title="Dokumentasi"
            description="Kumpulan dokumentasi disusun agar pengunjung dapat mengakses kembali foto, video, dan suasana penting Fiorella secara ringkas."
            dark
          />

          <div className="space-y-8 md:space-y-10">
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
    </main>
  );
}