import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { CommentDto } from '../model/CommentDto';

@Injectable()
export class CommentService {


  constructor(private httpClient: HttpClient) { }

  submitNewComment(idPost: number, idUser: number, content: string) {
    const url = CONST.URL_POST_ADD_COMMENT;
    const commentDto = new CommentDto();
    commentDto.content = content;
    commentDto.idPost = idPost;
    commentDto.idUser = idUser;
    return this.httpClient.post<CommentDto>(url,commentDto)
      .pipe(
        tap(commentDto => console.log('added new comment')),
        catchError(handleError('failed to add comment', new CommentDto())
        ));
  }

  deleteCommentById(idComment: number) {
    const url = CONST.URL_DELETE_COMMENT.replace('{id}', idComment.toString());
    return this.httpClient.get<Boolean>(url)
      .pipe(
        tap(deleted => console.log('deleted Comment')),
        catchError(handleError('failed to delete comment', false))
      );
  }

}
