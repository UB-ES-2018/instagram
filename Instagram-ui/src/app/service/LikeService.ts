import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { Like } from '../model/Like';

@Injectable()
export class LikeService {


  constructor(private httpClient: HttpClient) { }

  submitLikeToImage(idPost: number, idUser: number) {
    const url = CONST.URL_LIKE_ADD;
    const likeDto = new Like();
    likeDto.idPost = idPost;
    likeDto.idUser = idUser;
    return this.httpClient.post<Like>(url,likeDto)
      .pipe(
        tap(commentDto => console.log('added new like')),
        catchError(handleError('failed to add like', new Like())
        ));
  }

  deleteLike(idPost: number, idUser:number) {
    const likeDto = new Like();
    likeDto.idPost = idPost;
    likeDto.idUser = idUser;
    const url = CONST.URL_DELETE_LIKE;
    return this.httpClient.post<Boolean>(url,likeDto)
      .pipe(
        tap(deleted => console.log('deleted like')),
        catchError(handleError('failed to delete like', false))
      );
  }

}
