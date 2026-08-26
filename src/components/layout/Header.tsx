"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Header.css";

const links = [
  ["Beranda", "/#home"],
  ["Hari Pelaksanaan", "/hari-pelaksanaan"], 
  ["Foto Divisi", "/#divisi"],
  ["Dibalik Kepanitiaan", "/dibalik-kepanitiaan"], 
  ["Sayembara Visual", "/#sayembara"], 
  ["Tentang Fiorella", "/tentang-fiorella#tentang-fiorella"],
  ["Arsip", "/arsip"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false); // Selalu tutup menu mobile saat link diklik

    const targetUrl = new URL(href, window.location.origin);

    if (targetUrl.hash && targetUrl.pathname === pathname) {
      const elem = document.getElementById(targetUrl.hash.slice(1));

      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
        setActiveHash(targetUrl.hash);
      }
    }
  };

  const isActiveLink = (href: string) => {
    const [linkPath, linkHash = ""] = href.split("#");
    if (pathname !== linkPath) return false;
    if (!linkHash) return true;

    const currentHash = activeHash || (linkHash === "home" ? "#home" : "");
    return currentHash === `#${linkHash}`;
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
        aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
      >
        <span>{open ? "Tutup" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav className={open ? "nav-pill nav-open" : "nav-pill"} aria-label="Navigasi utama">
        {links.map(([label, href]) => (
          <Link 
            key={label} 
            href={href} 
            className={isActiveLink(href) ? "active" : ""}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
