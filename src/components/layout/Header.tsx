"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const links = [
  ["Beranda", "/"], 
  ["Hari Pelaksanaan", "/hari-pelaksanaan"], 
  ["Foto Divisi", "/#divisi"],
  ["Dibalik Kepanitiaan", "/dibalik-kepanitiaan"], 
  ["Sayembara Visual", "/#sayembara"], 
  ["Tentang Fiorella", "/tentang-fiorella"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false); // Selalu tutup menu mobile saat link diklik

    // Cek apakah ini link anchor (scroll to section)
    const isAnchorLink = href.startsWith("/#");
    
    // Cek apakah kita sedang berada di halaman Beranda
    const isAtHomePage = pathname === "/";

    if (isAnchorLink) {
      if (isAtHomePage) {
        // SKENARIO 1: Sedang di Beranda, lakukan smooth scroll manual
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const elem = document.getElementById(targetId);
        
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL bar tanpa refresh
          window.history.pushState(null, "", href);
        }
      }
      // SKENARIO 2: Jika tidak di Beranda, biarkan Next.js Link bekerja secara default 
      // (Pindah ke '/' lalu lompat ke hash)
    }
  };

  return (
    <header className="site-header">
      <Link href="/" className="mobile-brand">
        <Image src="/logo/Logo_White.png" alt="Fiorella" width={92} height={34} />
      </Link>
      <button 
        className="menu-button" 
        onClick={() => setOpen(!open)} 
        aria-expanded={open} 
        aria-label="Buka navigasi"
      >
        {open ? "Tutup" : "Menu"}
      </button>
      <nav className={open ? "nav-pill nav-open" : "nav-pill"}>
        {links.map(([label, href]) => (
          <Link 
            key={label} 
            href={href} 
            // Aktif jika pathname sama persis, ATAU jika di beranda dan url cocok dengan hash
            className={pathname === href ? "active" : ""} 
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}