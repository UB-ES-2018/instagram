import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { catchError, tap, map } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { User } from '../model/User';
import { authService } from './auth.service';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient, private authenticationService: authService) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(CONST.URL_USERS_GET_ALL)
      .pipe(
        tap(users => console.log(`fetched users`)),
        catchError(handleError('getUsers', []))
      );
  }

  registerUser(user: User) {
    return this.httpClient.post<User>(CONST.URL_USERS_ADD, user)
      .pipe(
        tap(p => console.log(`registered user`))
      );
  }

  getProfile(name: String): Observable<User> {
    return this.httpClient.get<User>(CONST.URL_USER_GET_BY_USERNAME + name);
  }

  getAmountFollowers(id: number): Observable<number> {
    return this.httpClient.get(CONST.URL_FOLLOWERS + id).pipe(map((users: User[]) => users.length));
  }

  getAmountFolloweds(id: number): Observable<number> {
    return this.httpClient.get(CONST.URL_FOLLOWEDS + id).pipe(map((users: User[]) => users.length));
  }

  getAmountPost(id: number): Observable<number> {
    return this.httpClient.get(CONST.URL_POST + id).pipe(map((posts: any[]) => posts.length));
  }


}
