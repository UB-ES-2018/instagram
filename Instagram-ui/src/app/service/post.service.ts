import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { PostLoad } from '../model/PostLoad';
import { PostDto } from '../model/Post';
import { PostPerfil } from '../model/PostPerfil';

@Injectable()
export class PostService {


  constructor(private httpClient: HttpClient) { }

  requestIdPostByIdPostAndLoggin(idPost: number, idLoggin: number) {
    let url = CONST.URL_GET_POST_BY_IDPOST_AND_IDUSER_LOGGED.replace('{idPost}', idPost.toString());
    if (idLoggin) {
      url = url.concat('/?idUser=' + idLoggin.toString());
    }
    return this.httpClient.get<PostLoad>(url)
      .pipe(
        tap(postLoad => console.log('requested Photo Data and coments')),
        catchError(handleError('failed to load photo data and coments', new PostLoad())
        ));
  }

  requestPhotosForPerfil(idUser: number) {
    const url = CONST.URL_GET_POSTS_BY_IDUSER.replace('{idUser}', idUser.toString());
    return this.httpClient.get<PostPerfil[]>(url)
      .pipe(
        tap(postPerfil => console.log('requiested photos for perfil')),
        catchError(handleError('failed to load photos for perfil', []))
      );
  }

  requestPhotosForFeed(idUser: number) {
    const url = CONST.URL_GET_FEED_POSTS_BY_IDUSER.replace('{idUser}', idUser.toString());
    return this.httpClient.get<PostDto[]>(url)
      .pipe(
        tap(postFeed => console.log('requiested photos for feed')),
        catchError(handleError('failed to load photos for feed', []))
      );
  }

}
