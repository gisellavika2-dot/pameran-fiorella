// src/app/(pages)/sayembara/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

function CameraIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

export default function SayembaraPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "foto" | "video" | null
  >(null);

  return (
    <div className="relative bg-[#EDECE6] py-16 md:py-24">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link
            href="/"
            className="font-sans text-primary-dark hover:text-[#364A8C] underline mb-8 inline-block"
          >
            ← Kembali ke Home
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Sayembara Visual
          </h1>
          <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
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
                ? "ring-2 ring-primary-dark"
                : "hover:shadow-lg"
            }`}
          >
            <Card>
              <div className="p-12 text-center">
                <div className="flex justify-center text-primary-dark mb-4">
                  <CameraIcon />
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary-dark mb-2">
                  Karya Foto Terbaik
                </h2>
                <p className="font-sans text-gray-600">
                  Lihat koleksi foto terbaik dari sayembara
                </p>
              </div>
            </Card>
          </button>

          <button
            onClick={() => setSelectedCategory("video")}
            className={`transition-all ${
              selectedCategory === "video"
                ? "ring-2 ring-primary-dark"
                : "hover:shadow-lg"
            }`}
          >
            <Card>
              <div className="p-12 text-center">
                <div className="flex justify-center text-primary-dark mb-4">
                  <VideoIcon />
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary-dark mb-2">
                  Kompilasi Video
                </h2>
                <p className="font-sans text-gray-600">
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
              className="font-sans bg-gray-200 text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Pilih Kategori Lain
            </button>
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center py-12">
            <p className="font-sans text-gray-500">
              Pilih salah satu kategori di atas untuk memulai
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
