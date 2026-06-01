export interface HorarioItem {
  categoria: string;
  edad: string;
  dias: string;
  hora: string;
}

export const HORARIOS: HorarioItem[] = [
  {
    categoria: "Baby Fútbol",
    edad: "3 – 5 años",
    dias: "Sábado y Domingo",
    hora: "4:30 PM – 5:30 PM",
  },
  {
    categoria: "Fútbol Base",
    edad: "Cat. 2019–2021 (6–8 años)",
    dias: "Sábado y Domingo",
    hora: "4:30 PM – 5:30 PM",
  },
  {
    categoria: "Fútbol Base",
    edad: "Cat. 2013–2014 (10–12 años)",
    dias: "Sábado y Domingo",
    hora: "4:30 PM – 5:30 PM",
  },
  {
    categoria: "Fútbol Base",
    edad: "Cat. 2011–2012 (12–14 años)",
    dias: "Sábado y Domingo",
    hora: "5:30 PM – 6:30 PM",
  },
  {
    categoria: "Fútbol Base",
    edad: "Cat. 2009–2010 (14–16 años)",
    dias: "Sábado y Domingo",
    hora: "6:30 PM – 7:30 PM",
  },
  {
    categoria: "Fútbol Femenino",
    edad: "Todas las edades",
    dias: "Sábado y Domingo",
    hora: "4:30 PM – 5:30 PM",
  },
  {
    categoria: "Adultos / Amateur",
    edad: "18+ años",
    dias: "Sábado y Domingo",
    hora: "7:30 PM – 8:30 PM", // TODO: confirmar horario real
  },
];
