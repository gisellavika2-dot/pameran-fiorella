// src/app/page.tsx

import Link from "next/link";
import { divisions } from "@/data/divisions";
import { schedule } from "@/data/schedule";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ScrollSnapContainer, ScrollSnapSection } from "@/components/ui/ScrollSnap";

export default function Home() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSnapSection>
        <div className="bg-primary-dark text-neutral-light-bg w-full py-20 md:py-32">
          <div className="section-container text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">
              Fiorella
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Pameran Foto dan Video - Menampilkan dokumentasi kegiatan dari
              berbagai divisi
            </p>
            <Button variant="secondary" size="lg">
              Jelajahi Sekarang
            </Button>
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
      </ScrollSnapSection>

      {/* Foto Divisi Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
              Divisi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((division) => (
                <Link
                  key={division.id}
                  href={`/divisi/${division.id}`}
                  className="group"
                >
                  <Card hoverable>
                    <div className="p-6">
                      <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                        <span className="font-sans text-gray-400 text-sm">Logo Divisi</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">
                        {division.name}
                      </h3>
                      <p className="font-sans text-gray-600 text-sm mb-4">
                        {division.description}
                      </p>
                      <p className="font-sans text-xs text-gray-500">
                        {division.coordinatorName}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Dibalik Kepanitiaan Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-neutral-light-bg">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                  Dibalik Kepanitiaan
                </h2>
                <p className="font-sans text-gray-600 mb-6">
                  Lihat perjalanan dan kerja keras tim yang telah membuat Fiorella
                  menjadi sebuah pameran yang luar biasa.
                </p>
                <Link href="/dibalik-kepanitiaan">
                  <Button variant="primary" size="lg">
                    Baca Selengkapnya
                  </Button>
                </Link>
              </div>
              <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="font-sans text-gray-500">Foto Tim</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Sayembara Visual Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="font-sans text-gray-500">Karya Sayembara</span>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                  Sayembara Visual
                </h2>
                <p className="font-sans text-gray-600 mb-6">
                  Jelajahi koleksi karya visual terbaik dari sayembara Fiorella.
                  Temukan foto dan video yang menginspirasi.
                </p>
                <Link href="/sayembara">
                  <Button variant="primary" size="lg">
                    Lihat Sayembara
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}