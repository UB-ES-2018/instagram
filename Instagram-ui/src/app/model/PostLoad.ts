import { Coment } from './Coment';

export class PostLoad {
    idPost: number;
    idUser: number;
    photo: string;
    photoPerfil: string;
    description: string;
    createdAt: string;
    ownerName: string;
    coments: Array<Coment>;
    numLikes: number;
    liked: boolean;

    public static createDummy(): PostLoad {
        const post = new PostLoad();
        post.idPost = null;
        post.idUser = null;
        post.photo = null;
        post.description = null;
        post.createdAt = null;
        post.ownerName = null;
        post.coments = null;

        return post;
    }
}

