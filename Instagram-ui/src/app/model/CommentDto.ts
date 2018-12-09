export class CommentDto {
    id: number;
    idUser: number;
    idPost: number;
    content: string;

    public static createDummy(): CommentDto {
        const commentDto = new CommentDto();
        commentDto.id = -1;
        commentDto.idUser = -1;
        commentDto.idPost = -1;
        commentDto.content = "test";

        return commentDto;
    }
}
