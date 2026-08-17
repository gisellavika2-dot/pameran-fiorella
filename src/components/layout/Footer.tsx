import Link from "next/link";
import { SITE_NAME } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400">
              Pameran foto dan video dari sebuah kegiatan yang menampilkan karya
              terbaik dari berbagai divisi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/hari-pelaksanaan"
                  className="hover:text-white transition-colors"
                >
                  Hari Pelaksanaan
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-fiorella"
                  className="hover:text-white transition-colors"
                >
                  Tentang Fiorella
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <p className="text-gray-400">Email: info@fiorella.com</p>
            <p className="text-gray-400">
              Ikuti media sosial kami untuk update terbaru
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {SITE_NAME}. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
