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
          <div className="hero-copy">
            <span className="eyebrow">“bunga kecil”</span>
            <h1>Fiorella</h1>
            <p>Tempat karya, cerita, dan kebersamaan tumbuh menjadi satu. Sebuah pameran dokumentasi perjalanan OMB UMN 2026.</p>
            <Link className="figma-button" href="/tentang-fiorella">Selengkapnya <span>→</span></Link>
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