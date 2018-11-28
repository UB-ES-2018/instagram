import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { CommentDto } from '../model/CommentDto';
import { CommentLikeDto } from '../model/CommentLikeDto';

@Injectable()
export class LikeCommentService {


  constructor(private httpClient: HttpClient) { }

  submitNewLikeToComment(idComment: number, idUser: number) {
    const url = CONST.URL_COMMENT_LIKE_ADD;
    const commentLikeDto = new CommentLikeDto();
    commentLikeDto.idComment = idComment;
    commentLikeDto.idUser = idUser;
    return this.httpClient.post<CommentDto>(url,commentLikeDto)
      .pipe(
        tap(commentDto => console.log('added new like to comment')),
        catchError(handleError('failed to add like to comment', new CommentLikeDto())
        ));
  }

  deleteLikeToComment(idComment: number,idUser: number) {
    let url = CONST.URL_DELETE_COMMENT_LIKE.replace('{idComment}', idComment.toString());
    url = url.replace('{idUser}', idUser.toString());
    return this.httpClient.get<Boolean>(url)
      .pipe(
        tap(deleted => console.log('deleted Comment')),
        catchError(handleError('failed to delete comment', false))
      );
  }

}
