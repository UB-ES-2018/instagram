import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs/';
import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { User } from '../model/User';

@Injectable()
export class authService {

  logStatus = false;
  logUser: User = User.createDummy();

  constructor(private httpClient: HttpClient) {
    if (sessionStorage.getItem('authenticatedUser')) {
      this.logStatus = true;
      this.logUser = JSON.parse( atob(sessionStorage.getItem('authenticatedUser')));
      console.log('authService: recovered user -> ' + JSON.stringify(this.logUser) );
    }
  }

  setLogin(username: string, password: string): Observable<User> {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.httpClient.post<User>(CONST.URL_USER_LOGIN, user)
      .pipe(
        tap(p => {
          console.log('Loging user');
          this.logUser = p;
          this.logStatus = true;
          sessionStorage.setItem('authenticatedUser',  btoa(JSON.stringify(this.logUser)));
        }),
        catchError(handleError('getUsers', User.createDummy()))
      );
  }

  removeLogin() {
    this.logUser = User.createDummy();
    this.logStatus = false;
  }

}
