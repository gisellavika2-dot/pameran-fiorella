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
}

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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/IGA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/DANIEL.webp" },
      { nama: "SARYA 3", fotoSarya: "/divisi/sarya/JOY.webp" },
    ],
    cardFoto: [
      {
        role: "BPH",
        title: "Badan Pengurus Harian",
        isi: [
          { nama: "NAMA", foto: "/divisi/koor/GVEN.webp" },
          { nama: "NAMA", foto: "/divisi/koor/JELI.webp" },
          { nama: "NAMA", foto: "/divisi/koor/DEZA.webp" },
          { nama: "NAMA", foto: "/divisi/koor/NIKI.webp" },
          { nama: "NAMA", foto: "/divisi/koor/CACA.webp" },
          { nama: "NAMA", foto: "/divisi/koor/RAIN.webp" },
        ],
      },
    ],
    anggota: [],
    warna1: "#37449C",
    warna2: "#7F8DBA",
    warna3: "#DBDFEC",
    galeriFoto: [
      "/fotoDivisi/Foto Divisi_Adhikara_6.webp",
    ],
    bg: "/fotoDivisi/Foto Divisi_Adhikara_6.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/IONA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/LYA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/PATRICIA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/ANGEL.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/TIARA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/RACHEL.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ERSA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SHANIA.webp" }] },
    ],
    anggota: [],
    warna1: "#6B6968",
    warna2: "#999DA0",
    warna3: "#F3F4F4",
    galeriFoto: [
      "/fotoDivisi/Foto Divisi_Anantara_4.webp",
    ],
    bg: "/fotoDivisi/Foto Divisi_Anantara_4.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/FIO.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/IRENE.webp" },
      { nama: "SARYA 3", fotoSarya: "/divisi/sarya/SYLVA.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/AIMAN.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/JOANA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/RAY.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/LADY.webp" }] },
    ],
    anggota: [],
    warna1: "#F3819C",
    warna2: "#FACBDC",
    warna3: "#FEF0F5",
    galeriFoto: ["/fotoDivisi/BGARTHA.webp"],
    bg: "/fotoDivisi/BGARTHA.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/BIMA.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ALYA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/FREDY.webp" }] },
    ],
    anggota: [],
    warna1: "#000000",
    warna2: "#6B6968",
    warna3: "#D6D5D5",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Birendra_4.webp"],
    bg: "/fotoDivisi/Foto Divisi_Birendra_4.webp",
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
    sarya: [{ nama: "SARYA 1", fotoSarya: "/divisi/sarya/SETO.webp" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/OLAF.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/RICHI.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/GAB2.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/IRFAN.webp" }] },
    ],
    anggota: [],
    warna1: "#84499D",
    warna2: "#C598C8",
    warna3: "#EFE3F0",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Daraka_6.webp"],
    bg: "/fotoDivisi/Foto Divisi_Daraka_6.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/NUR.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/RIA.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/LINDA.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/DEVINA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SHERYL.webp" }] },
    ],
    anggota: [],
    warna1: "#0FAB70",
    warna2: "#8ACB99",
    warna3: "#DEF0E2",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Janardana_Sesi 1_6.webp"],
    bg: "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_6.webp",
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
    sarya: [{ nama: "SARYA 1", fotoSarya: "/divisi/sarya/DAME.webp" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/JESS.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/BINA.webp" }] },
    ],
    anggota: [],
    warna1: "#C67F4E",
    warna2: "#DCA37D",
    warna3: "#F5E5DB",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Nayaka_5.webp"],
    bg: "/fotoDivisi/Foto Divisi_Nayaka_5.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/DICKY.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/APRIL.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/ALDO.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/KEVIN.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/VIKA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/STERN.webp" }] },
    ],
    anggota: [
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/TIPEN.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/HAKIM.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/FELI.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/EMMAN.webp" },
    ],
    warna1: "#F7CE1C",
    warna2: "#F8E58D",
    warna3: "#FDF8DF",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Rachana_5.webp"],
    bg: "/fotoDivisi/Foto Divisi_Rachana_5.webp",
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
    sarya: [{ nama: "SARYA 1", fotoSarya: "/divisi/sarya/YOVI.webp" }],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/NORU.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/ODRE.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/GAB.webp" }] },
    ],
    anggota: [],
    warna1: "#EB1A3F",
    warna2: "#F05E5E",
    warna3: "#FBD2D2",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Sanchara_6.webp"],
    bg: "/fotoDivisi/Foto Divisi_Sanchara_6.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/AGUS.webp" },
      { nama: "SARYA 2", fotoSarya: "/divisi/sarya/KIKY.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/CLARA.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/SEAN.webp" }] },
    ],
    anggota: [
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/CILLA.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/CELLO.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/MARVEL.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/MATHEW.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/MELVIN.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/ABI.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/PETER.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/RICHARD.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/JASON.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/TOBY.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/SAM.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/SATRIA.webp" },
    ],
    warna1: "#F47421",
    warna2: "#F4AE6E",
    warna3: "#FCE8D6",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Sanchita_6.webp"],
    bg: "/fotoDivisi/Foto Divisi_Sanchita_6.webp",
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
      { nama: "SARYA 1", fotoSarya: "/divisi/sarya/LUQY.webp" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/AUREL.webp" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/divisi/koor/CHERYL.webp" }] },
    ],
    anggota: [
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/CINDY.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/HASNA.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/LEVINA.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/BEATRICE.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/JOSEFIN.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/MARVEL2.webp" },
      { nama: "Anggota 1", fotoAnggota: "/divisi/anggota/STHEVANIE.webp" },
    ],
    warna1: "#5EC7D0",
    warna2: "#9FDAE2",
    warna3: "#E2F3F6",
    galeriFoto: ["/fotoDivisi/Foto Divisi_Swarna_3.webp"],
    bg: "/fotoDivisi/Foto Divisi_Swarna_3.webp",
  },
];

export const getDivisionById = (id: string): Division | undefined => {
  return divisions.find((div) => div.id === id);
};
