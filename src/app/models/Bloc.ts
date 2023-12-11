import { Chambre } from "./Chambre";
import { Foyer } from "./Foyer";

export class Bloc {
    idBloc!: number;
    nomBloc!: string;
    capaciteBloc!: number;
    foyer: Foyer | undefined;
    chambres: Chambre[] | undefined;
  }
