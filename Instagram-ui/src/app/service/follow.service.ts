import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { User } from '../model/User';
import { Follow } from '../model/Follow';

@Injectable()
export class FollowService {


  constructor(private httpClient: HttpClient) { }

  requestFollow(follower:number,followed:number): Observable<Follow> {
    var follow = new Follow();
    follow.followed=followed;
    follow.follower=follower;
    return this.httpClient.post<Follow>(CONST.URL_FOLLOWER_REQUEST,follow)
    .pipe(
      tap(users => console.log(`Follow requested`)),
      catchError(handleError('getUsers', new Follow()))
    );
  }

  checkFollow(followed:number, follower:number):  Observable<Follow> {
    return this.httpClient.get<Follow>(CONST.URL_FOLLOW_CHECK + followed + '/' + follower)
      .pipe(tap(
        val => console.log(val)),
        catchError(handleError('checkFollow',Follow.createDummy())));

  }
 
}
