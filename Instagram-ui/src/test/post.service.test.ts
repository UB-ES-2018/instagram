import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostLoad } from '../app/model/PostLoad';


@Injectable()
export class PostServiceTest {


  constructor() { }

  requestIdPostByIdPostAndLoggin(idPost: number, idLoggin: number) {
    return of(PostLoad.createDummy());
  }

  requestPhotosForPerfil(idUser: number) {
    return null;
  }

}

