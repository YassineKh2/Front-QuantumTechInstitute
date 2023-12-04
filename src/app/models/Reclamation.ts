import { Etudiant } from "./Etudiant";

export class Reclamation {
    idReclamation: number | undefined;
    titre!: string;
    message!: string;
    email!: string;
    dateCreation!: Date;
    etudiant: Etudiant | undefined;
  }