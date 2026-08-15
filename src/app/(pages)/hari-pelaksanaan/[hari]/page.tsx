// src/app/(pages)/hari-pelaksanaan/[hari]/page.tsx

import Link from "next/link";
import { schedule } from "@/data/schedule";
import Button from "@/components/ui/Button";

interface PageProps {
  params: {
    hari: string;
  };
}

export default function HariDetailPage({ params }: PageProps) {
  const day = parseInt(params.hari);
  const scheduleDay = schedule.find((s) => s.day === day);

  if (!scheduleDay) {
    return (
      <div className="py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-serif text-4xl font-bold text-primary-dark mb-4">
            Hari tidak ditemukan
          </h1>
          <p className="font-sans text-gray-600 mb-8">
            Hari yang Anda cari tidak tersedia.
          </p>
          <Link href="/hari-pelaksanaan">
            <Button variant="primary">Kembali ke Jadwal</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/hari-pelaksanaan"
            className="font-sans text-primary-dark hover:text-[#364A8C] underline"
          >
            ← Kembali ke Jadwal
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mt-4 mb-2">
            {scheduleDay.title}
          </h1>
          <p className="font-sans text-gray-600 text-lg">{scheduleDay.date}</p>
          <p className="font-sans text-gray-600 mt-4">{scheduleDay.description}</p>
        </div>

        {/* Gallery Section */}
        <h2 className="font-serif text-2xl font-bold text-primary-dark mb-8">
          Galeri Hari ke-{day}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-64 flex items-center justify-center"
            >
              <span className="font-sans text-gray-400">
                Foto {item} Hari {day}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-gray-600 text-sm">
            Total: 6 foto dari hari ke-{day}
          </p>
        </div>
      </div>
    </div>
  );
}