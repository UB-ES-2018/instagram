import { Coment } from './Coment';

export class PostLoad {
    idPost: number;
    idUser: number;
    photo: string;
    description: string;
    createdAt: string;
    ownerName: string;
    coments: Array<Coment>;

}