import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommentDto } from '../app/model/CommentDto';

@Injectable()
export class CommentServiceTest {


  constructor() { }

  submitNewComment(idPost: number, idUser: number, content: string) {
    return of(CommentDto.createDummy());;
  }

  deleteCommentById(idComment: number) {
    return of(CommentDto.createDummy());;
  }

}