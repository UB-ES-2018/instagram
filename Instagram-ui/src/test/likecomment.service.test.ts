import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommentLikeDto } from '../app/model/CommentLikeDto';

@Injectable()
export class LikeCommentServiceTest {


  constructor() { }

  submitNewLikeToComment(idComment: number, idUser: number) {
    return of(CommentLikeDto.createDummy());
  }

  deleteLikeToComment(idComment: number,idUser: number) {
    return of(CommentLikeDto.createDummy());
  }

}
