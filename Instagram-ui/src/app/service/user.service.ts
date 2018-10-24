import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { User } from '../model/User';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient) { }

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
  setLogin(username:string, password:string): Observable<User>{
    var user = new User();
    user.username = username;
    user.password = password;
    return this.httpClient.post<User>(CONST.URL_USER_LOGIN, user)
      .pipe(
        tap(p=> console.log('Loging user'))
      );
  }
 
}
