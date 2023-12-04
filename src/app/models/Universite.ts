import { Foyer } from "./Foyer";


export class Universite {
    idUniversite!: number;
    nomUniversite: string | undefined;
    adresse: string | undefined;
    imageUni!: string;
    foyer: Foyer | undefined;
  }
