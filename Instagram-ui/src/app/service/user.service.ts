import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { catchError, tap, map } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { User } from '../model/User';
import { authService } from './auth.service';
import { PassDto } from '../model/passDto';

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

  changeUserData(user:User){
    return this.httpClient.put<User>(CONST.URL_PUT_UPDATE_ALL,user)
      .pipe(
        tap(p=> console.log('user data has been change'))
      )
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

  getFollowers(id: number): Observable<User[]> {
    return this.httpClient.get(CONST.URL_FOLLOWERS + id).pipe(map((users: User[]) => users));
  }

  getFolloweds(id: number): Observable<User[]> {
    return this.httpClient.get(CONST.URL_FOLLOWEDS + id).pipe(map((users: User[]) => users));
  }

  getAmountPost(id: number): Observable<number> {
    return this.httpClient.get(CONST.URL_POST + id).pipe(map((posts: any[]) => posts.length));
  }

  modifyName(name: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_NAME.replace('{username}', userName), name);

  }
  modifyUserName(userNamen: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_USERNAME.replace('{username}', userName), userNamen);

  }
  modifyBio(bio: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_BIO.replace('{username}', userName), bio);

  }

  modifyPhone(phone: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_PHONE.replace('{username}', userName), phone);

  }

  modifyGender(gender: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_GENDER.replace('{username}', userName), gender);

  }

  modifyPass(oldpass: string, userName: string, newPass: string): Observable<User> {
    var passDto = new PassDto();
    passDto.username = userName;
    passDto.newPassword = newPass;
    passDto.oldPassword = oldpass;

    const URL = CONST.URL_PUT_USER_PASSWORD
    return this.httpClient.put<User>(URL,passDto)
      .pipe(
        tap(users => console.log(`changed password`)),
        catchError(handleError('getUsers', new User()))
      );
  }

  modifyEMail(email: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_EMAIL.replace('{username}', userName), email);

  }

  modifyWeb(web: string, userName: string): Observable<User> {
    return this.httpClient.put<User>(CONST.URL_UPDATE_WEB.replace('{username}', userName), web);

  }



}
