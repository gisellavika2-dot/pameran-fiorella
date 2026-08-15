// src/app/(pages)/hari-pelaksanaan/page.tsx

import Link from "next/link";
import { schedule } from "@/data/schedule";
import Card from "@/components/ui/Card";

export default function HariPelaksanaanPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
          Hari Pelaksanaan
        </h1>

        <p className="font-sans text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Acara Fiorella diadakan selama 5 hari. Pilih salah satu hari di bawah
          untuk melihat galeri foto dan dokumentasi dari hari tersebut.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day) => (
            <Link key={day.id} href={`/hari-pelaksanaan/${day.day}`}>
              <Card hoverable>
                <div className="p-8 text-center">
                  <div className="font-serif text-6xl font-bold text-primary-dark mb-4">
                    {day.day}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-primary-dark mb-2">
                    {day.title}
                  </h2>
                  <p className="font-sans text-gray-600 mb-4">{day.date}</p>
                  <p className="font-sans text-gray-500">{day.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}