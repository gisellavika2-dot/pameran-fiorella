export interface ScheduleDay {
  id: number;
  day: number;
  date: string;
  title: string;
  description: string;
}

export const schedule: ScheduleDay[] = [
  {
    id: 1,
    day: 1,
    date: "15 Agustus 2026",
    title: "Sesi Informasi Online",
    description:
      "Merupakan rangkaian pemaparan materi yang dilaksanakan oleh divisi Wistara atau Public Relations agar para peserta dapat mendengarkan segala informasi yang dibutuhkan sebagai persiapan menyambut UMN NEXT 2026.",
  },
  {
    id: 2,
    day: 2,
    date: "17 Agustus 2026",
    title: "Hari Penanaman",
    description:
      "Hari Penanaman menjadi awal perjalanan Pejuang Kembang Sepatu dalam mengenal lingkungan, nilai, dan budaya Universitas Multimedia Nusantara. Melalui berbagai rangkaian kegiatan UMN NEXT 2026, peserta diajak untuk menanamkan fondasi, semangat kebersamaan, serta nilai-nilai yang akan menjadi bekal dalam menjalani kehidupan perkuliahan di UMN.",
  },
  {
    id: 3,
    day: 3,
    date: "18 Agustus 2026",
    title: "Hari Penyinaran",
    description:
      "Hari Penyinaran menjadi kesempatan bagi Pejuang Kembang Sepatu untuk memperluas wawasan dan memahami berbagai potensi yang bisa dikembangkan selama berkuliah di UMN. Melalui kegiatan yang interaktif, peserta diajak saling belajar, beradaptasi, dan menemukan arah perjalanan mereka sebagai mahasiswa.",
  },
  {
    id: 4,
    day: 4,
    date: "19 Agustus 2026",
    title: "Hari Perekahan",
    description:
      "Hari Perekahan menjadi momentum bagi Pejuang Kembang Sepatu untuk menunjukkan perkembangan dari nilai, wawasan, dan pengalaman yang telah diperoleh. Pengetahuan ini akan diasah lebih dalam melalui dinamika penugasan Uttara, Satkara, dan Kenali Kampus. Selain itu, semangat para peserta juga akan disalurkan melalui Aksi Sosial yang terus berlanjut hingga akhir rangkaian Sidang Terbuka Senat.",
  },
  {
    id: 5,
    day: 5,
    date: "21 Agustus 2026",
    title: "Sidang Terbuka Senat",
    description:
      "Sidang Terbuka Senat menandai langkah awal Pejuang Kembang Sepatu sebagai mahasiswa baru UMN angkatan 2026. Rangkaian ini tidak hanya menjadi sambutan resmi masuk ke keluarga besar UMN, tetapi juga menjadi puncak selesainya penugasan Aksi Sosial. Peserta dibekali nilai dan semangat untuk memulai perkuliahan yang membawa dampak positif bagi lingkungan sekitarnya.",
  },
];

export const getScheduleByDay = (day: number): ScheduleDay | undefined => {
  return schedule.find((s) => s.day === day);
};
