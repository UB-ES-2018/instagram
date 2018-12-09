export class CommentLikeDto {
    id:number;
    idUser: number;
    idComment: number;

    public static createDummy(): CommentLikeDto {
        const commentLikeDto = new CommentLikeDto();
        commentLikeDto.id = -1;
        commentLikeDto.idUser = -1;
        commentLikeDto.idComment = -1;

        return commentLikeDto;
    }
}
