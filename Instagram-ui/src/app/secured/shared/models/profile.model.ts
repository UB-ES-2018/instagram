import { Picture } from './picture.model';

export class Profile {
    name: string;
    publications: number;
    followers: number;
    following: number;
    pictures: Picture[];
    constructor() {
        this.name = 'icemephit';
        this.publications = 0;
        this.followers = 0;
        this.following = 0;
        this.pictures = [];
    }
}
