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
    description: "Sesi informasi online rangkaian acara Fiorella",
  },
  {
    id: 2,
    day: 2,
    date: "17 Agustus 2026",
    title: "Hari Penanaman",
    description: "Hari penanaman rangkaian acara Fiorella",
  },
  {
    id: 3,
    day: 3,
    date: "18 Agustus 2026",
    title: "Hari Penyinaran",
    description: "Hari penyinaran rangkaian acara Fiorella",
  },
  {
    id: 4,
    day: 4,
    date: "19 Agustus 2026",
    title: "Hari Perekahan",
    description: "Hari perekahan rangkaian acara Fiorella",
  },
  {
    id: 5,
    day: 5,
    date: "21 Agustus 2026",
    title: "Sidang Terbuka Senat",
    description: "Sidang terbuka senat rangkaian acara Fiorella",
  },
];

export const getScheduleByDay = (day: number): ScheduleDay | undefined => {
  return schedule.find((s) => s.day === day);
};