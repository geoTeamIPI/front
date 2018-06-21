import { Story } from "./story.model";

export class Location {

    id: string;
    lat: string;
    lng: string;
    address: string;
    stories: Story[];
}