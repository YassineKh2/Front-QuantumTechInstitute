import { Club } from "./Club";

export class Event {
    idEvent: number = 0;
  nomEvent: string = '';
  descriptionEvent: string = '';
  image: string = '';
  organisateur: string = '';
  location: string = '';
  dateCreation: Date = new Date();
  club: Club | undefined;
  
}