import { Reservation } from "./Reservation";


export class Etudiant {
    idEtudiant: number | undefined;
    nomEt!: string;
    prenomEt!: string;
    cin!: number;
    ecole!: string;
    dateNaissance!: Date;
    password!: string;
    email!: string;
    reservations: Reservation[]=[]; 
  }