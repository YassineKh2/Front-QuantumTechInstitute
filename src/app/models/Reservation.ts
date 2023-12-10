import { Etudiant } from "./Etudiant";
import { Chambre } from "./Chambre"
export class Reservation {
    idReservation!: string;
    anneeUniversitaire: Date = new Date("now");
    estValide: boolean = false;
    etudiants: Etudiant[] = [];
    chambre!: Chambre;
  }