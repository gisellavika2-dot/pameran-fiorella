export interface Division {
  id: number;
  name: string;
  nameEng: string;
  description: string;
  coordinatorName: string;
  coordinatorRole: string;
}

export const divisions: Division[] = [
  {
    id: 1,
    name: "Adhikara",
    nameEng: "Executive",
    description: "Deskripsi Divisi 1",
    coordinatorName: "Nama Koordinator 1",
    coordinatorRole: "Koordinator Divisi 1",
  },
  {
    id: 2,
    name: "Sanchita",
    nameEng: "Documentation",
    description: "Deskripsi Divisi 2",
    coordinatorName: "Nama Koordinator 2",
    coordinatorRole: "Koordinator Divisi 2",
  },
  {
    id: 3,
    name: "Birendra",
    nameEng: "Guardians",
    description: "Deskripsi Divisi 3",
    coordinatorName: "Nama Koordinator 3",
    coordinatorRole: "Koordinator Divisi 3",
  },
  {
    id: 4,
    name: "Nayaka",
    nameEng: "F&B",
    description: "Deskripsi Divisi 4",
    coordinatorName: "Nama Koordinator 4",
    coordinatorRole: "Koordinator Divisi 4",
  },
  {
    id: 5,
    name: "Janardana",
    nameEng: "Medic",
    description: "Deskripsi Divisi 5",
    coordinatorName: "Nama Koordinator 5",
    coordinatorRole: "Koordinator Divisi 5",
  },
  {
    id: 6,
    name: "Daraka",
    nameEng: "Equipment",
    description: "Deskripsi Divisi 6",
    coordinatorName: "Nama Koordinator 6",
    coordinatorRole: "Koordinator Divisi 6",
  },
  {
    id: 7,
    name: "Artha",
    nameEng: "Person in Charge (PIC)",
    description: "Deskripsi Divisi 7",
    coordinatorName: "Nama Koordinator 7",
    coordinatorRole: "Koordinator Divisi 7",
  },
  {
    id: 8,
    name: "Anantara",
    nameEng: "Public Relations",
    description: "Deskripsi Divisi 8",
    coordinatorName: "Nama Koordinator 8",
    coordinatorRole: "Koordinator Divisi 8",
  },
  {
    id: 9,
    name: "Swarna",
    nameEng: "Visual",
    description: "Deskripsi Divisi 9",
    coordinatorName: "Nama Koordinator 9",
    coordinatorRole: "Koordinator Divisi 9",
  },
  {
    id: 10,
    name: "Rachana",
    nameEng: "Website",
    description: "Deskripsi Divisi 10",
    coordinatorName: "Nama Koordinator 10",
    coordinatorRole: "Koordinator Divisi 10",
  },
  {
    id: 11,
    name: "Sanchara",
    nameEng: "Event",
    description: "Deskripsi Divisi 11",
    coordinatorName: "Nama Koordinator 11",
    coordinatorRole: "Koordinator Divisi 11",
  },
];

export const getDivisionById = (id: number): Division | undefined => {
  return divisions.find((div) => div.id === id);
};
