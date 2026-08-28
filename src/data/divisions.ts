export interface IsiCard {
  nama: string;
  foto: string;
}

export interface CardFoto {
  role: "BPH" | "Koor";
  title: string;
  isi: IsiCard[];
}

export interface CardSarya {
  nama: string;
  fotoSarya: string;
}
export interface CardAnggota {
  nama: string;
  fotoAnggota: string;
}

export interface SesiFoto {
  idSesi?: string;
  namaSesi?: string;
  fotos: string[];
}

export interface Division {
  id: string;
  logo: string;
  name: string;
  nameEng: string;
  description: string;
  tugas: string;
  fotoDivisi: SesiFoto[];
  sarya: CardSarya[];
  cardFoto: CardFoto[];
  anggota: CardAnggota[];
  warna1: string;
  warna2: string;
  warna3: string;
  galeriFoto: string[];
  bg: string;
  landingPreview: string;
}

export type DivisionPreview = Pick<
  Division,
  "id" | "logo" | "name" | "nameEng" | "landingPreview"
>;

export const divisions: Division[] = [
  {
    id: "1",
    logo: "/figma/division-bph.webp",
    name: "Adhikara",
    nameEng: "Executive",
    description: "Yang memiliki wewenang, otoritas, dan kompeten.",
    tugas: "Divisi Adhikara bertugas sebagai pusat kendali yang menentukan langkah dan pedoman bagi seluruh panitia OMB UMN 2026 NEXT.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Adhikara_2.webp",
          "/fotoDivisi/Foto Divisi_Adhikara_4.webp",
          "/fotoDivisi/Foto Divisi_Adhikara_6.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/IGA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/DANIEL.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/JOY.gif" },
    ],
    cardFoto: [
      {
        role: "BPH",
        title: "Badan Pengurus Harian",
        isi: [
          { nama: "NAMA", foto: "/divisi/koor/GVEN.gif" },
          { nama: "NAMA", foto: "/divisi/koor/JELI.gif" },
          { nama: "NAMA", foto: "/divisi/koor/DEZA.gif" },
          { nama: "NAMA", foto: "/divisi/koor/NIKI.gif" },
          { nama: "NAMA", foto: "/divisi/koor/CACA.gif" },
          { nama: "NAMA", foto: "/divisi/koor/RAIN.gif" },
        ],
      },
    ],
    anggota: [],
    warna1: "#37449C",
    warna2: "#7F8DBA",
    warna3: "#DBDFEC",
    galeriFoto: [
      "/galeriFotoDivisi/ADHIKARA-1.jpg",
      "/galeriFotoDivisi/ADHIKARA-2.jpg",
      "/galeriFotoDivisi/ADHIKARA-3.jpg",
      "/galeriFotoDivisi/ADHIKARA-4.jpg",
      "/galeriFotoDivisi/ADHIKARA-5.jpg",
      "/galeriFotoDivisi/ADHIKARA-6.jpg",
      "/galeriFotoDivisi/ADHIKARA-7.jpg",
      "/galeriFotoDivisi/ADHIKARA-8.jpg",
      "/galeriFotoDivisi/ADHIKARA-9.jpg",
      "/galeriFotoDivisi/ADHIKARA-10.jpg",
      "/galeriFotoDivisi/ADHIKARA-11.jpg",
      "/galeriFotoDivisi/ADHIKARA-12.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Adhikara_6.webp",
    landingPreview: "/fotoDivisi/landing/1-adhikara.webp",
  },


  {
    id: "2",
    logo: "/figma/division-pr.webp",
    name: "Anantara",
    nameEng: "Public Relations",
    description: "Antara, ditengah, penghubung, interval",
    tugas: "Divisi Anantara menjaga komunikasi yang lancar dan menghubungkan semua pihak terkait kegiatan OMB UMN 2026 NEXT.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Anantara_2.webp",
          "/fotoDivisi/Foto Divisi_Anantara_3.webp",
          "/fotoDivisi/Foto Divisi_Anantara_4.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/IONA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/LYA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/PATRICIA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/ANGEL.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/TIARA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/RACHEL.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ERSA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SHANIA.gif" }] },
    ],
    anggota: [],
    warna1: "#6B6968",
    warna2: "#999DA0",
    warna3: "#F3F4F4",
    galeriFoto: [
      "/galeriFotoDivisi/ANANTARA-1.jpg",
      "/galeriFotoDivisi/ANANTARA-2.jpg",
      "/galeriFotoDivisi/ANANTARA-3.jpg",
      "/galeriFotoDivisi/ANANTARA-4.jpg",
      "/galeriFotoDivisi/ANANTARA-5.jpg",
      "/galeriFotoDivisi/ANANTARA-6.jpg",
      "/galeriFotoDivisi/ANANTARA-7.jpg",
      "/galeriFotoDivisi/ANANTARA-8.jpg",
      "/galeriFotoDivisi/ANANTARA-9.jpg",
      "/galeriFotoDivisi/ANANTARA-10.jpg",
      "/galeriFotoDivisi/ANANTARA-11.jpg",
      "/galeriFotoDivisi/ANANTARA-12.jpg",
      "/galeriFotoDivisi/ANANTARA-13.jpg",
      "/galeriFotoDivisi/ANANTARA-14.jpg",
      "/galeriFotoDivisi/ANANTARA-15.jpg",
      "/galeriFotoDivisi/ANANTARA-16.jpg",
      "/galeriFotoDivisi/ANANTARA-17.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Anantara_4.webp",
    landingPreview: "/fotoDivisi/landing/2-anantara.webp",
  },


  {
    id: "3",
    logo: "/figma/division-pic.webp",
    name: "Artha",
    nameEng: "Person in Charge (PIC)",
    description: "Tujuan, maksud, arti / kepentingan",
    tugas: "Divisi Artha membimbing dan mengarahkan anggota berdasarkan pengetahuan dan pengalaman yang dimiliki.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Row 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_35.webp",
          "/fotoDivisi/Foto Divisi_Artha_36.webp",
          "/fotoDivisi/Foto Divisi_Artha_37.webp",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Row 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_8.webp",
          "/fotoDivisi/Foto Divisi_Artha_9.webp",
          "/fotoDivisi/Foto Divisi_Artha_10.webp",
        ],
      },
      {
        idSesi: "sesi-3",
        namaSesi: "Row 3",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_14.webp",
          "/fotoDivisi/Foto Divisi_Artha_15.webp",
          "/fotoDivisi/Foto Divisi_Artha_17.webp",
        ],
      },
      {
        idSesi: "sesi-4",
        namaSesi: "Row 4",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_19.webp",
          "/fotoDivisi/Foto Divisi_Artha_20.webp",
          "/fotoDivisi/Foto Divisi_Artha_21.webp",
        ],
      },
      {
        idSesi: "sesi-5",
        namaSesi: "Row 5",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_25.webp",
          "/fotoDivisi/Foto Divisi_Artha_26.webp",
          "/fotoDivisi/Foto Divisi_Artha_28.webp",
        ],
      },
      {
        idSesi: "sesi-6",
        namaSesi: "Row 6",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_30.webp",
          "/fotoDivisi/Foto Divisi_Artha_31.webp",
          "/fotoDivisi/Foto Divisi_Artha_33.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/FIO.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/IRENE.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/SYLVA.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/AIMAN.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/JOANA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/RAY.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/LADY.gif" }] },
    ],
    anggota: [],
    warna1: "#F3819C",
    warna2: "#FACBDC",
    warna3: "#FEF0F5",
    galeriFoto: [
      "/galeriFotoDivisi/ARTHA-1.jpg",
      "/galeriFotoDivisi/ARTHA-2.jpg",
      "/galeriFotoDivisi/ARTHA-3.jpg",
      "/galeriFotoDivisi/ARTHA-4.jpg",
      "/galeriFotoDivisi/ARTHA-5.jpg",
      "/galeriFotoDivisi/ARTHA-6.jpg",
      "/galeriFotoDivisi/ARTHA-7.jpg",
      "/galeriFotoDivisi/ARTHA-8.jpg",
      "/galeriFotoDivisi/ARTHA-9.jpg",
      "/galeriFotoDivisi/ARTHA-0.jpg",
      "/galeriFotoDivisi/ARTHA-10.jpg",
      "/galeriFotoDivisi/ARTHA-11.jpg",
      "/galeriFotoDivisi/ARTHA-12.jpg",
      "/galeriFotoDivisi/ARTHA-13.jpg",
      "/galeriFotoDivisi/ARTHA-14.jpg",
      "/galeriFotoDivisi/ARTHA-15.jpg",
      "/galeriFotoDivisi/ARTHA-16.jpg",
      "/galeriFotoDivisi/ARTHA-17.jpg",
      "/galeriFotoDivisi/ARTHA-18.jpg",
      "/galeriFotoDivisi/ARTHA-19.jpg",
    ],
    bg: "/fotoDivisi/BGARTHA.webp",
    landingPreview: "/fotoDivisi/landing/3-artha.webp",
  },


  {
    id: "4",
    logo: "/figma/division-keamanan.webp",
    name: "Birendra",
    nameEng: "Guardians",
    description: "Raja yang berani, pelindung",
    tugas: "Divisi Birendra menjaga tertib dan keamanan seluruh kegiatan OMB UMN 2026 NEXT.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Sesi 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Birendra_1.webp",
          "/fotoDivisi/Foto Divisi_Birendra_3.webp",
          "/fotoDivisi/Foto Divisi_Birendra_4.webp",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Sesi 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Birendra_1_2.webp",
          "/fotoDivisi/Foto Divisi_Birendra_3_2.webp",
          "/fotoDivisi/Foto Divisi_Birendra_4_2.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/BIMA.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ALYA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/FREDY.gif" }] },
    ],
    anggota: [],
    warna1: "#000000",
    warna2: "#6B6968",
    warna3: "#D6D5D5",
    galeriFoto: [
      "/galeriFotoDivisi/BIRENDRA-1.jpg",
      "/galeriFotoDivisi/BIRENDRA-2.jpg",
      "/galeriFotoDivisi/BIRENDRA-3.jpg",
      "/galeriFotoDivisi/BIRENDRA-4.jpg",
      "/galeriFotoDivisi/BIRENDRA-5.jpg",
      "/galeriFotoDivisi/BIRENDRA-6.jpg",
      "/galeriFotoDivisi/BIRENDRA-7.jpg",
      "/galeriFotoDivisi/BIRENDRA-8.jpg",
      "/galeriFotoDivisi/BIRENDRA-9.jpg",
      "/galeriFotoDivisi/BIRENDRA-10.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Birendra_4.webp",
    landingPreview: "/fotoDivisi/landing/4-birendra.webp",
  },


  {
    id: "5",
    logo: "/figma/division-perkap.webp",
    name: "Daraka",
    nameEng: "Equipment",
    description: "Yang menahan, yang menopang, yang memelihara",
    tugas: "Divisi Daraka memastikan semua kebutuhan teknis siap agar kegiatan berjalan lancar.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Daraka_1.webp",
          "/fotoDivisi/Foto Divisi_Daraka_3.webp",
          "/fotoDivisi/Foto Divisi_Daraka_6.webp",
        ],
      },
    ],
    sarya: [{ nama: "SARYA", fotoSarya: "/divisi/sarya/SETO.gif" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/OLAF.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/RICHI.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/GAB2.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/IRFAN.gif" }] },
    ],
    anggota: [],
    warna1: "#84499D",
    warna2: "#C598C8",
    warna3: "#EFE3F0",
    galeriFoto: [
      "/galeriFotoDivisi/DARAKA-1.jpg",
      "/galeriFotoDivisi/DARAKA-2.jpg",
      "/galeriFotoDivisi/DARAKA-3.jpg",
      "/galeriFotoDivisi/DARAKA-4.jpg",
      "/galeriFotoDivisi/DARAKA-5.jpg",
      "/galeriFotoDivisi/DARAKA-6.jpg",
      "/galeriFotoDivisi/DARAKA-7.jpg",
      "/galeriFotoDivisi/DARAKA-8.jpg",
      "/galeriFotoDivisi/DARAKA-9.jpg",
      "/galeriFotoDivisi/DARAKA-10.jpg",
      "/galeriFotoDivisi/DARAKA-11.jpg",
      "/galeriFotoDivisi/DARAKA-12.jpg",
      "/galeriFotoDivisi/DARAKA-13.jpg",
      "/galeriFotoDivisi/DARAKA-14.jpg",
      "/galeriFotoDivisi/DARAKA-15.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Daraka_6.webp",
    landingPreview: "/fotoDivisi/landing/5-daraka.webp",
  },


  {
    id: "6",
    logo: "/figma/division-medis.webp",
    name: "Janardana",
    nameEng: "Medic",
    description: "Pelindung manusia / penyelamat.",
    tugas: "Divisi Janardana memberikan pertolongan dan menjaga keselamatan peserta selama kegiatan berlangsung.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Sesi 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_2.webp",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_4.webp",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_6.webp",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Sesi 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_1.webp",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_3.webp",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_5.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/NUR.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/RIA.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/LINDA.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/DEVINA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SHERYL.gif" }] },
    ],
    anggota: [],
    warna1: "#0FAB70",
    warna2: "#8ACB99",
    warna3: "#DEF0E2",
    galeriFoto: [
      "/galeriFotoDivisi/JANARDANA-1.jpg",
      "/galeriFotoDivisi/JANARDANA-2.jpg",
      "/galeriFotoDivisi/JANARDANA-3.jpg",
      "/galeriFotoDivisi/JANARDANA-4.jpg",
      "/galeriFotoDivisi/JANARDANA-5.jpg",
      "/galeriFotoDivisi/JANARDANA-6.jpg",
      "/galeriFotoDivisi/JANARDANA-7.jpg",
      "/galeriFotoDivisi/JANARDANA-8.jpg",
      "/galeriFotoDivisi/JANARDANA-9.jpg",
      "/galeriFotoDivisi/JANARDANA-10.jpg",
      "/galeriFotoDivisi/JANARDANA-11.jpg",
      "/galeriFotoDivisi/JANARDANA-12.jpg",
      "/galeriFotoDivisi/JANARDANA-13.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_6.webp",
    landingPreview: "/fotoDivisi/landing/6-janardana.webp",
  },


  {
    id: "7",
    logo: "/figma/division-konsum.webp",
    name: "Nayaka",
    nameEng: "Food & Beverage",
    description: "Baik, bermanfaat, nyaman",
    tugas: "Divisi Nayaka memastikan semua kebutuhan konsumsi terpenuhi agar peserta nyaman selama kegiatan.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Nayaka_1.webp",
          "/fotoDivisi/Foto Divisi_Nayaka_3.webp",
          "/fotoDivisi/Foto Divisi_Nayaka_5.webp",
        ],
      },
    ],
    sarya: [{ nama: "SARYA", fotoSarya: "/divisi/sarya/DAME.gif" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/JESS.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/BINA.gif" }] },
    ],
    anggota: [],
    warna1: "#C67F4E",
    warna2: "#DCA37D",
    warna3: "#F5E5DB",
    galeriFoto: [
      "/galeriFotoDivisi/NAYAKA-1.jpg",
      "/galeriFotoDivisi/NAYAKA-2.jpg",
      "/galeriFotoDivisi/NAYAKA-3.jpg",
      "/galeriFotoDivisi/NAYAKA-4.jpg",
      "/galeriFotoDivisi/NAYAKA-5.jpg",
      "/galeriFotoDivisi/NAYAKA-6.jpg",
      "/galeriFotoDivisi/NAYAKA-7.jpg",
      "/galeriFotoDivisi/NAYAKA-8.jpg",
      "/galeriFotoDivisi/NAYAKA-9.jpg",
      "/galeriFotoDivisi/NAYAKA-10.jpg",
      "/galeriFotoDivisi/NAYAKA-11.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Nayaka_5.webp",
    landingPreview: "/fotoDivisi/landing/7-nayaka.webp",
  },


  {
    id: "8",
    logo: "/figma/division-website.webp",
    name: "Rachana",
    nameEng: "Website",
    description: "Ciptaan, karya, rancangan",
    tugas: "Divisi Rachana menyebarkan informasi secara luas, jelas, dan tepat waktu.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Rachana_1.webp",
          "/fotoDivisi/Foto Divisi_Rachana_3.webp",
          "/fotoDivisi/Foto Divisi_Rachana_5.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/DICKY.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/APRIL.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/ALDO.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/KEVIN.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/VIKA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/STERN.gif" }] },
    ],
    anggota: [
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/TIPEN.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/HAKIM.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/FELI.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/EMMAN.gif" },
    ],
    warna1: "#F7CE1C",
    warna2: "#F8E58D",
    warna3: "#FDF8DF",
    galeriFoto: [
      "/galeriFotoDivisi/RACHANA-1.jpg",
      "/galeriFotoDivisi/RACHANA-2.jpg",
      "/galeriFotoDivisi/RACHANA-3.jpg",
      "/galeriFotoDivisi/RACHANA-4.jpg",
      "/galeriFotoDivisi/RACHANA-5.jpg",
      "/galeriFotoDivisi/RACHANA-6.jpg",
      "/galeriFotoDivisi/RACHANA-7.jpg",
      "/galeriFotoDivisi/RACHANA-8.jpg",
      "/galeriFotoDivisi/RACHANA-9.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Rachana_5.webp",
    landingPreview: "/fotoDivisi/landing/8-rachana.webp",
  },


  {
    id: "9",
    logo: "/figma/division-acara.webp",
    name: "Sanchara",
    nameEng: "Event",
    description: "Pergerakan, perjalanan, alur / flow",
    tugas: "Divisi Sanchara bertugas mengatur jalannya kegiatan agar tersusun rapi, mengalir, dan berkesan dari awal hingga akhir.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Sanchara_1.webp",
          "/fotoDivisi/Foto Divisi_Sanchara_4.webp",
          "/fotoDivisi/Foto Divisi_Sanchara_6.webp",
        ],
      },
    ],
    sarya: [{ nama: "SARYA", fotoSarya: "/divisi/sarya/YOVI.gif" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/NORU.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ODRE.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/GAB.gif" }] },
    ],
    anggota: [],
    warna1: "#EB1A3F",
    warna2: "#F05E5E",
    warna3: "#FBD2D2",
    galeriFoto: [
      "/galeriFotoDivisi/SANCHARA-1.jpg",
      "/galeriFotoDivisi/SANCHARA-2.jpg",
      "/galeriFotoDivisi/SANCHARA-3.jpg",
      "/galeriFotoDivisi/SANCHARA-4.jpg",
      "/galeriFotoDivisi/SANCHARA-5.jpg",
      "/galeriFotoDivisi/SANCHARA-6.jpg",
      "/galeriFotoDivisi/SANCHARA-7.jpg",
      "/galeriFotoDivisi/SANCHARA-8.jpg",
      "/galeriFotoDivisi/SANCHARA-9.jpg",
      "/galeriFotoDivisi/SANCHARA-10.jpg",
      "/galeriFotoDivisi/SANCHARA-11.jpg",
      "/galeriFotoDivisi/SANCHARA-12.jpg",
      "/galeriFotoDivisi/SANCHARA-13.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Sanchara_6.webp",
    landingPreview: "/fotoDivisi/landing/9-sanchara.webp",
  },


  {
    id: "10",
    logo: "/figma/division-dokum.webp",
    name: "Sanchita",
    nameEng: "Documentation",
    description: "Terkumpul, tersimpan, tertata",
    tugas: "Divisi Sanchita mengabadikan seluruh kegiatan agar dapat dikenang dan menjadi arsip OMB UMN 2026 NEXT.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Sanchita_1.webp",
          "/fotoDivisi/Foto Divisi_Sanchita_2.webp",
          "/fotoDivisi/Foto Divisi_Sanchita_6.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/AGUS.gif" },
      { nama: "SARYA", fotoSarya: "/divisi/sarya/KIKY.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/CLARA.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SEAN.gif" }] },
    ],
    anggota: [
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/CILLA.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/CELLO.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/MARVEL.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/MATHEW.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/MELVIN.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/ABI.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/PETER.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/RICHARD.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/JASON.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/TOBY.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/SAM.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/SATRIA.gif" },
    ],
    warna1: "#F47421",
    warna2: "#F4AE6E",
    warna3: "#FCE8D6",
    galeriFoto: [
      "/galeriFotoDivisi/SANCHITA-1.jpg",
      "/galeriFotoDivisi/SANCHITA-2.jpg",
      "/galeriFotoDivisi/SANCHITA-3.jpg",
      "/galeriFotoDivisi/SANCHITA-4.jpg",
      "/galeriFotoDivisi/SANCHITA-5.jpg",
      "/galeriFotoDivisi/SANCHITA-6.jpg",
      "/galeriFotoDivisi/SANCHITA-7.jpg",
      "/galeriFotoDivisi/SANCHITA-8.jpg",
      "/galeriFotoDivisi/SANCHITA-9.jpg",
      "/galeriFotoDivisi/SANCHITA-10.jpg",
      "/galeriFotoDivisi/SANCHITA-11.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Sanchita_6.webp",
    landingPreview: "/fotoDivisi/landing/10-sanchita.webp",
  },


  {
    id: "11",
    logo: "/figma/division-visual.webp",
    name: "Swarna",
    nameEng: "Visual",
    description: "Emas, cahaya, kemilau",
    tugas: "Divisi Swarna mengekspresikan kreativitas melalui desain dan visual kegiatan OMB UMN 2026 NEXT.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Swarna_1.webp",
          "/fotoDivisi/Foto Divisi_Swarna_2.webp",
          "/fotoDivisi/Foto Divisi_Swarna_3.webp",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA", fotoSarya: "/divisi/sarya/LUQY.gif" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/AUREL.gif" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/CHERYL.gif" }] },
    ],
    anggota: [
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/CINDY.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/HASNA.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/LEVINA.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/BEATRICE.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/JOSEFIN.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/MARVEL2.gif" },
      { nama: "Anggota", fotoAnggota: "/divisi/anggota/STHEVANIE.gif" },
    ],
    warna1: "#5EC7D0",
    warna2: "#9FDAE2",
    warna3: "#E2F3F6",
    galeriFoto: [
      "/galeriFotoDivisi/SWARNA-1.jpg",
      "/galeriFotoDivisi/SWARNA-2.jpg",
      "/galeriFotoDivisi/SWARNA-3.jpg",
      "/galeriFotoDivisi/SWARNA-4.jpg",
      "/galeriFotoDivisi/SWARNA-5.jpg",
      "/galeriFotoDivisi/SWARNA-6.jpg",
      "/galeriFotoDivisi/SWARNA-7.jpg",
      "/galeriFotoDivisi/SWARNA-8.jpg",
      "/galeriFotoDivisi/SWARNA-9.jpg",
      "/galeriFotoDivisi/SWARNA-10.jpg",
      "/galeriFotoDivisi/SWARNA-11.jpg",
    ],
    bg: "/fotoDivisi/Foto Divisi_Swarna_3.webp",
    landingPreview: "/fotoDivisi/landing/11-swarna.webp",
  },
];

export const divisionPreviews: DivisionPreview[] = divisions.map(
  ({ id, logo, name, nameEng, landingPreview }) => ({
    id,
    logo,
    name,
    nameEng,
    landingPreview,
  }),
);

export const getDivisionById = (id: string): Division | undefined => {
  return divisions.find((div) => div.id === id);
};
