import { Location } from "./location.model";

export class Story {

    id: string;
    title: string;
    description: string;
    content: string;
    date: {
        year: number,
        month: number,
        day: number
      };
    location: Location;
  }
