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
  fotoDivisi: SesiFoto[];
  sarya: CardSarya[];
  cardFoto: CardFoto[];
  warna1: string;
  warna2: string;
  warna3: string;
}

export const divisions: Division[] = [
  {
    id: "1",
    logo: "/figma/division-bph.webp",
    name: "Adhikara",
    nameEng: "Executive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Adhikara_2.JPG",
          "/fotoDivisi/Foto Divisi_Adhikara_4.JPG",
          "/fotoDivisi/Foto Divisi_Adhikara_6.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 3", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      {
        role: "BPH",
        title: "Badan Pengurus Harian",
        isi: [
          { nama: "NAMA", foto: "/foto.png" },
          { nama: "NAMA", foto: "/foto.png" },
          { nama: "NAMA", foto: "/foto.png" },
          { nama: "NAMA", foto: "/foto.png" },
          { nama: "NAMA", foto: "/foto.png" },
          { nama: "NAMA", foto: "/foto.png" },
        ],
      },
    ],
    warna1: "#37449C",
    warna2: "#7F8DBA",
    warna3: "#D4D6D8",
  },
  {
    id: "2",
    logo: "/figma/division-dokum.webp",
    name: "Sanchita",
    nameEng: "Documentation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Sanchita_1.JPG",
          "/fotoDivisi/Foto Divisi_Sanchita_2.JPG",
          "/fotoDivisi/Foto Divisi_Sanchita_6.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#F47421",
    warna2: "#F4AE6E",
    warna3: "#FCD34D",
  },
  {
    id: "3",
    logo: "/figma/division-keamanan.webp",
    name: "Birendra",
    nameEng: "Guardians",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Sesi 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Birendra_1.JPG",
          "/fotoDivisi/Foto Divisi_Birendra_1_2.JPG",
          "/fotoDivisi/Foto Divisi_Birendra_3.JPG",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Sesi 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Birendra_3_2.JPG",
          "/fotoDivisi/Foto Divisi_Birendra_4_2.JPG",
          "/fotoDivisi/Foto Divisi_Birendra_1.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#000000",
    warna2: "#6B6968",
    warna3: "#999DA0",
  },
  {
    id: "4",
    logo: "/figma/division-konsum.webp",
    name: "Nayaka",
    nameEng: "Food & Beverage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Nayaka_1.JPG",
          "/fotoDivisi/Foto Divisi_Nayaka_3.JPG",
          "/fotoDivisi/Foto Divisi_Nayaka_5.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#C67F4E",
    warna2: "#DCA37D",
    warna3: "#F4AE6E",
  },
  {
    id: "5",
    logo: "/figma/division-medis.webp",
    name: "Janardana",
    nameEng: "Medic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Sesi 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_2.JPG",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_4.JPG",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_6.JPG",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Sesi 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_1.JPG",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_3.JPG",
          "/fotoDivisi/Foto Divisi_Janardana_Sesi 2_5.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#0FAB70",
    warna2: "#8ACB99",
    warna3: "#A7F3D0",
  },
  {
    id: "6",
    logo: "/figma/division-perkap.webp",
    name: "Daraka",
    nameEng: "Equipment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Daraka_1.JPG",
          "/fotoDivisi/Foto Divisi_Daraka_3.JPG",
          "/fotoDivisi/Foto Divisi_Daraka_6.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#84499D",
    warna2: "#C598C8",
    warna3: "#E9D5FF",
  },
  {
    id: "7",
    logo: "/figma/division-pic.webp",
    name: "Artha",
    nameEng: "Person in Charge (PIC)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        idSesi: "sesi-1",
        namaSesi: "Sesi 1",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_1_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_1_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_1_3.JPG",
        ],
      },
      {
        idSesi: "sesi-2",
        namaSesi: "Sesi 2",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_2_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_2_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_2_3.JPG",
        ],
      },
      {
        idSesi: "sesi-3",
        namaSesi: "Sesi 3",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_3_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_3_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_3_3.JPG",
        ],
      },
      {
        idSesi: "sesi-4",
        namaSesi: "Sesi 4",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_4_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_4_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_4_3.JPG",
        ],
      },
      {
        idSesi: "sesi-5",
        namaSesi: "Sesi 5",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_5_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_5_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_5_3.JPG",
        ],
      },
      {
        idSesi: "sesi-6",
        namaSesi: "Sesi 6",
        fotos: [
          "/fotoDivisi/Foto Divisi_Artha_6_1.JPG",
          "/fotoDivisi/Foto Divisi_Artha_6_2.JPG",
          "/fotoDivisi/Foto Divisi_Artha_6_3.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#F3819C",
    warna2: "#FACBDC",
    warna3: "#FCE7F3",
  },
  {
    id: "8",
    logo: "/figma/division-pr.webp",
    name: "Anantara",
    nameEng: "Public Relations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Anantara_2.JPG",
          "/fotoDivisi/Foto Divisi_Anantara_3.JPG",
          "/fotoDivisi/Foto Divisi_Anantara_4.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#6B6968",
    warna2: "#999DA0",
    warna3: "#D4D6D8",
  },
  {
    id: "9",
    logo: "/figma/division-visual.webp",
    name: "Swarna",
    nameEng: "Visual",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Swarna_1.JPG",
          "/fotoDivisi/Foto Divisi_Swarna_2.JPG",
          "/fotoDivisi/Foto Divisi_Swarna_3.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#5EC7D0",
    warna2: "#9FDAE2",
    warna3: "#CFFAFE",
  },
  {
    id: "10",
    logo: "/figma/division-website.webp",
    name: "Rachana",
    nameEng: "Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Rachana_1.JPG",
          "/fotoDivisi/Foto Divisi_Rachana_3.JPG",
          "/fotoDivisi/Foto Divisi_Rachana_5.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
      { nama: "SARYA 2", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#F7CE1C",
    warna2: "#F8E58D",
    warna3: "#FEF08A",
  },
  {
    id: "11",
    logo: "/figma/division-acara.webp",
    name: "Sanchara",
    nameEng: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fotoDivisi: [
      {
        fotos: [
          "/fotoDivisi/Foto Divisi_Sanchara_1.JPG",
          "/fotoDivisi/Foto Divisi_Sanchara_4.JPG",
          "/fotoDivisi/Foto Divisi_Sanchara_6.JPG",
        ],
      },
    ],
    sarya: [
      { nama: "SARYA 1", fotoSarya: "/foto.png" },
    ],
    cardFoto: [
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
      { role: "Koor", title: "Koordinator Divisi", isi: [{ nama: "NAMA", foto: "/foto.png" }] },
    ],
    warna1: "#EB1A3F",
    warna2: "#F05E5E",
    warna3: "#FECDD3",
  },
];

export const getDivisionById = (id: string): Division | undefined => {
  return divisions.find((div) => div.id === id);
};