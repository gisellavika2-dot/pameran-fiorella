import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/data/divisions";
import { schedule } from "@/data/schedule";
import DivisionAccordion from "@/components/ui/DivisionAccordion";
import EventCarousel from "@/components/ui/EventCarousel";

const photoTones = ["tone-blue", "tone-lilac", "tone-sky", "tone-cream", "tone-navy"];
export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-ornament hero-ornament-one" />
        <div className="hero-ornament hero-ornament-two" />
        <div className="hero-card">
          <div className="hero-mark">
            <Image src="/figma/fiorella-blue.png" alt="Fiorella" width={318} height={426} priority />
          </div>
        </div>
      </ScrollSnapSection>

      {/* Hari Pelaksanaan Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-[#EDECE6]">
          <div className="section-container max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#121E42] text-center mb-12">
              Hari Pelaksanaan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {schedule.slice(0, 3).map((day) => (
                <Link
                  key={day.id}
                  href={`/hari-pelaksanaan/${day.day}`}
                  className="group block relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-[#121E42]/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <img 
                    src={`https://picsum.photos/seed/schedule-${day.day}/600/800`} 
                    alt={day.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/90 via-[#121E42]/40 to-transparent flex flex-col justify-end p-6 text-[#EDECE6]">
                    <p className="text-sm font-semibold text-[#EDECE6]/80 mb-1">{day.date}</p>
                    <h3 className="font-serif text-2xl font-bold text-[#EDECE6] tracking-tight">{day.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/hari-pelaksanaan">
                <button className="bg-[#364A8C] hover:bg-[#121E42] text-[#EDECE6] font-semibold px-8 py-3.5 rounded-full shadow-md transition-colors">
                  Lihat Semua Hari
                </button>
              </Link>
            </div>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 128" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H1440V72C1260 46 1110 42 952 71C765 105 635 129 447 108C270 89 159 47 0 33V0Z" />
        </svg>
      </section>

      <section className="editorial-section events-section">
        <p className="section-kicker">Linimasa kegiatan</p>
        <h2>Hari Pelaksanaan</h2>
        <EventCarousel items={schedule.slice(0, 5)} />
        <Link className="text-link" href="/hari-pelaksanaan">Lihat seluruh rangkaian <span>→</span></Link>
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
          {Array.from({ length: 12 }, (_, i) => <div className={`mosaic-cell ${photoTones[i % photoTones.length]}`} key={i}><span>{String(i + 1).padStart(2, "0")}</span></div>)}
        </div>
        <Link className="figma-button dark-button" href="/dibalik-kepanitiaan">Hasil Dokumentasi <span>→</span></Link>
      </section>

      <section className="editorial-section contest-section">
        <p className="section-kicker">Ruang untuk berkarya</p>
        <h2>Sayembara Visual</h2>
        <div className="coming-card"><span>Segera hadir</span><strong>Coming Soon</strong><p>Karya terpilih sedang kami siapkan untuk dipamerkan.</p></div>
        <Link className="text-link" href="/sayembara">Kunjungi sayembara <span>→</span></Link>
      </section>
    </main>
  );
}
