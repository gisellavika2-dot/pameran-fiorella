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
        <div className="bg-black text-white w-full py-20 md:py-32">
          <div className="section-container text-center">
            <h1 className="section-title text-white mb-4">Fiorella</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
        <div className="w-full py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="section-title text-center mb-12">Hari Pelaksanaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {schedule.map((day) => (
                <Link
                  key={day.id}
                  href={`/hari-pelaksanaan/${day.day}`}
                  className="group"
                >
                  <Card hoverable>
                    <div className="p-6 text-center">
                      <div className="text-4xl font-bold text-black mb-2">
                        {day.day}
                      </div>
                      <p className="font-semibold text-gray-800">{day.title}</p>
                      <p className="text-sm text-gray-500 mt-2">{day.date}</p>
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
          </div>
        </div>
      </ScrollSnapSection>

      {/* Foto Divisi Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2 className="section-title text-center mb-12">Divisi</h2>
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
                        <span className="text-gray-400 text-sm">Logo Divisi</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{division.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {division.description}
                      </p>
                      <p className="text-xs text-gray-500">
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
        <div className="w-full py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="section-title mb-4">Dibalik Kepanitiaan</h2>
                <p className="text-gray-600 mb-6">
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
                <span className="text-gray-500">Foto Tim</span>
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
                <span className="text-gray-500">Karya Sayembara</span>
              </div>
              <div>
                <h2 className="section-title mb-4">Sayembara Visual</h2>
                <p className="text-gray-600 mb-6">
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