"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Beranda", "/"], ["Hari Pelaksanaan", "/hari-pelaksanaan"], ["Foto Divisi", "/#divisi"],
  ["Dibalik Kepanitiaan", "/dibalik-kepanitiaan"], ["Sayembara Visual", "/#sayembara"], ["Tentang Fiorella", "/tentang-fiorella"], ["Arsip", "/arsip"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header">
    <Link href="/" className="mobile-brand"><Image src="/logo/Logo_White.png" alt="Fiorella" width={92} height={34} /></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka navigasi">{open ? "Tutup" : "Menu"}</button>
    <nav className={open ? "nav-pill nav-open" : "nav-pill"}>
      {links.map(([label, href]) => <Link key={label} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </header>;
}
