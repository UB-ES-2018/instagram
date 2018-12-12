export class Like {
    id: number;
    idUser: number;
    idPost: number;

    public static createDummy(): Like {
        const like = new Like();
        like.id = -1;
        like.idUser = -1;
        like.idPost = -1;

        return like;
    }
}