import { Bloc } from "./Bloc";
import { Universite } from "./Universite";

export class Foyer {
    idFoyer!: number;
    nomFoyer!: string;
    capaciteFoyer: number | undefined;
    universite!: Universite;
    blocs: Bloc[] = [];
  }