import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/data/divisions";
import { schedule } from "@/data/schedule";
import DivisionAccordion from "@/components/ui/DivisionAccordion";
import EventCarousel from "@/components/ui/EventCarousel";

const behindTheScenesRows = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-ornament hero-ornament-one" />
        <div className="hero-ornament hero-ornament-two" />
        
        {/* Kartu Hero dengan tata letak flex sejajar dan simetris */}
        <div className="hero-card flex flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-12 md:p-14">
          <div className="hero-mark flex shrink-0 items-center justify-center">
            <Image 
              src="/figma/fiorella-blue.png" 
              alt="Fiorella" 
              width={280} 
              height={380} 
              className="h-auto w-full max-w-[240px] object-contain md:max-w-[280px]"
              priority 
            />
          </div>
<<<<<<< HEAD
        </div>
      </ScrollSnapSection>

      {/* Hari Pelaksanaan Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-neutral-light-bg">
          <div className="section-container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
              Hari Pelaksanaan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {schedule.map((day) => (
                <Link
                  key={day.id}
                  href={`/hari-pelaksanaan/${day.day}`}
                  className="group"
                >
                  <Card hoverable>
                    <div className="p-6 text-center">
                      <div className="font-serif text-4xl font-bold text-primary-dark mb-2">
                        {day.day}
                      </div>
                      <p className="font-sans font-semibold text-gray-800">{day.title}</p>
                      <p className="font-sans text-sm text-gray-500 mt-2">{day.date}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/hari-pelaksanaan">
                <Button variant="outline" size="lg">
                  Lihat Semua Hari
                </Button>
              </Link>
            </div>
=======
          
          <div className="hero-copy flex flex-col items-start justify-center">
            <span className="eyebrow">“bunga kecil”</span>
            <h1>Fiorella</h1>
            <p>
              Tempat karya, cerita, dan kebersamaan tumbuh menjadi satu. Sebuah
              pameran dokumentasi perjalanan OMB UMN 2026.
            </p>
            <Link className="figma-button" href="/tentang-fiorella">
              Selengkapnya <span>→</span>
            </Link>
>>>>>>> ea1002a (benerin margin logo di home)
          </div>
        </div>

        <svg
          className="hero-wave"
          viewBox="0 0 1440 128"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0H1440V72C1260 46 1110 42 952 71C765 105 635 129 447 108C270 89 159 47 0 33V0Z" />
        </svg>
      </section>

      <section className="editorial-section events-section">
        <p className="section-kicker">Linimasa kegiatan</p>
        <h2>Hari Pelaksanaan</h2>
        <EventCarousel items={schedule.slice(0, 5)} />
        <Link className="text-link" href="/hari-pelaksanaan">
          Lihat seluruh rangkaian <span>→</span>
        </Link>
      </section>

      <section id="divisi" className="editorial-section divisions-section">
        <p className="section-kicker">Orang-orang di balik cerita</p>
        <h2>Foto Divisi</h2>
        <DivisionAccordion items={divisions} />
      </section>

      <section className="editorial-section behind-section">
        <p className="section-kicker">Yang tak terlihat di panggung</p>
        <h2>Dibalik Kepanitiaan</h2>
        <div className="mosaic" aria-label="Kolase dokumentasi panitia">
          {behindTheScenesRows.map((row, rowIndex) => (
            <div
              className={`mosaic-row ${
                rowIndex === 1 ? "mosaic-row-left" : "mosaic-row-right"
              }`}
              key={rowIndex}
            >
              {Array.from({ length: 4 }, (_, setIndex) => (
                <div className="mosaic-track" key={setIndex}>
                  {row.map((photoIndex) => (
                    <div className="mosaic-cell" key={photoIndex}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://picsum.photos/seed/fiorella-panitia-${photoIndex}/560/320`}
                        alt="Placeholder dokumentasi panitia"
                      />
                      <span>{String(photoIndex + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Link className="figma-button dark-button" href="/dibalik-kepanitiaan">
          Hasil Dokumentasi <span>→</span>
        </Link>
      </section>

      <section className="editorial-section contest-section">
        <p className="section-kicker">Ruang untuk berkarya</p>
        <h2>Sayembara Visual</h2>
        <div className="coming-card">
          <span>Segera hadir</span>
          <strong>Coming Soon</strong>
          <p>Karya terpilih sedang kami siapkan untuk dipamerkan.</p>
        </div>
        <Link className="text-link" href="/sayembara">
          Kunjungi sayembara <span>→</span>
        </Link>
      </section>
    </main>
  );
}