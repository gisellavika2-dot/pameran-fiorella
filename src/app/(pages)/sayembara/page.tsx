"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function SayembaraPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "foto" | "video" | null
  >(null);

  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Kembali ke Home
          </Link>
          <h1 className="section-title mb-4">Sayembara Visual</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih kategori untuk melihat karya-karya visual terbaik dari
            sayembara Fiorella. Temukan inspirasi dari koleksi foto dan video
            yang menakjubkan.
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <button
            onClick={() => setSelectedCategory("foto")}
            className={`transition-all ${
              selectedCategory === "foto"
                ? "ring-2 ring-black"
                : "hover:shadow-lg"
            }`}
          >
            <Card>
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📷</div>
                <h2 className="text-2xl font-bold mb-2">Karya Foto Terbaik</h2>
                <p className="text-gray-600">
                  Lihat koleksi foto terbaik dari sayembara
                </p>
              </div>
            </Card>
          </button>

          <button
            onClick={() => setSelectedCategory("video")}
            className={`transition-all ${
              selectedCategory === "video"
                ? "ring-2 ring-black"
                : "hover:shadow-lg"
            }`}
          >
            <Card>
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">🎥</div>
                <h2 className="text-2xl font-bold mb-2">Kompilasi Video</h2>
                <p className="text-gray-600">
                  Lihat kompilasi video terbaik dari sayembara
                </p>
              </div>
            </Card>
          </button>
        </div>

        {/* Action Buttons */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href={
                selectedCategory === "foto"
                  ? "/karya-terbaik"
                  : "/kompilasi-karya"
              }
            >
              <Button variant="primary" size="lg" className="w-full">
                {selectedCategory === "foto"
                  ? "Lihat Karya Foto Terbaik"
                  : "Lihat Kompilasi Video"}
              </Button>
            </Link>
            <button
              onClick={() => setSelectedCategory(null)}
              className="bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Pilih Kategori Lain
            </button>
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Pilih salah satu kategori di atas untuk memulai
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
