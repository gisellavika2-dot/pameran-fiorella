export const SITE_NAME = "Fiorella";
export const SITE_DESCRIPTION = "Pameran Foto dan Video Fiorella";

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Hari Pelaksanaan", href: "/hari-pelaksanaan" },
  { label: "Dibalik Kepanitiaan", href: "/dibalik-kepanitiaan" },
  { label: "Tentang Fiorella", href: "/tentang-fiorella" },
  { label: "Sayembara", href: "/sayembara" },
];

export const COLORS = {
  primary: "#000000",
  secondary: "#FFFFFF",
  accent: "#FF6B6B",
};

// src/data/constants.ts
// Cara pakai: ANNOUNCEMENT_STATUS.isOn otomatis true setelah ANNOUNCEMENT_CUTOFF lewat, false sebelumnya.
// Testing manual: set DEV_MODE_OVERRIDE ke "on" atau "off" untuk paksa status (butuh DEV_MODE = true).
// Sebelum deploy: pastikan DEV_MODE_OVERRIDE dibalikin ke undefined supaya ikut jadwal asli.
// Contoh: paksa nyala -> DEV_MODE_OVERRIDE = "on" | paksa mati -> "off" | jadwal asli -> undefined
export const DEV_MODE = true;
export const DEV_MODE_OVERRIDE: "on" | "off" | undefined = undefined;
export const ANNOUNCEMENT_CUTOFF = "2026-08-28T19:00:00+07:00";

const getAnnouncementIsOn = () => {
  if (DEV_MODE && DEV_MODE_OVERRIDE) return DEV_MODE_OVERRIDE === "on";
  return Date.now() >= new Date(ANNOUNCEMENT_CUTOFF).getTime();
};

export const ANNOUNCEMENT_STATUS: {
  isOn: boolean;
  devMode: boolean;
  devModeOverride?: "on" | "off";
} = {
  isOn: getAnnouncementIsOn(),
  devMode: DEV_MODE,
  devModeOverride: DEV_MODE_OVERRIDE,
};

// GRADIENT_HOME_ON: gaya background section-section di homepage (Hero tidak kena).
// true  -> gaya fiorella1: tiap section (Hari Pelaksanaan, Divisi, Dibalik Kepanitiaan, Sayembara)
//          pakai gambar gradient sendiri dari /gradien, memudar sangat halus dari section sebelumnya.
// false -> gaya fiorella2 saat ini: tiap section pakai warna/gradient flat seperti sekarang.
export const GRADIENT_HOME_ON = true;
