import { Universite } from "./Universite";

export class Club {
    idClub!: number;
    nomClub: string | undefined;
    type: string | undefined;
    descriptionClub: string | undefined;
    image: string | undefined;
    contact: string | undefined;
    status: string | undefined;
    dateCreation: Date | undefined;

    universite!: Universite | undefined;
    events: Event[] = [];
  
}