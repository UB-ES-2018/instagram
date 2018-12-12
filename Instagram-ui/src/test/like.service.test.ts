import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Like } from '../app/model/Like';

@Injectable()
export class LikeServiceTest {


  constructor() { }

  submitLikeToImage(idPost: number, idUser: number) {
    return of(Like.createDummy());
  }

  deleteLike(idPost: number, idUser:number) {
    return of(Like.createDummy());
  }

}
