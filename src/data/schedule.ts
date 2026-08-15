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
    date: "2024-01-15",
    title: "Hari Pertama",
    description: "Pembukaan dan acara hari pertama Fiorella",
  },
  {
    id: 2,
    day: 2,
    date: "2024-01-16",
    title: "Hari Kedua",
    description: "Lanjutan acara Fiorella",
  },
  {
    id: 3,
    day: 3,
    date: "2024-01-17",
    title: "Hari Ketiga",
    description: "Acara hari ketiga Fiorella",
  },
  {
    id: 4,
    day: 4,
    date: "2024-01-18",
    title: "Hari Keempat",
    description: "Acara hari keempat Fiorella",
  },
  {
    id: 5,
    day: 5,
    date: "2024-01-19",
    title: "Hari Kelima",
    description: "Penutupan acara Fiorella",
  },
];

export const getScheduleByDay = (day: number): ScheduleDay | undefined => {
  return schedule.find((s) => s.day === day);
};
