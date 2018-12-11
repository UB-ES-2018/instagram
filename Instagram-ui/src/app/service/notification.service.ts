import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { CONST } from '../const/const';
import { handleError } from '../error-handle/error.handling';
import { Notification } from '../model/Notification';

@Injectable()
export class NotificationService {


  constructor(private httpClient: HttpClient) { }

  getNotification(idUser: number) {
    const url = CONST.URL_GET_NOTIFICATION_ALL.replace('{idUser}', idUser.toString());;
    return this.httpClient.get<Notification[]>(url)
      .pipe(
        tap(notification => console.log('get Notifications')),
        catchError(handleError('failed to get notifications', [])
        ));
  }

  getRequest(idUser:number) {
    const url = CONST.URL_GET_NOTIFICATION_REQUEST.replace('{idUser}', idUser.toString());;
    return this.httpClient.get<Notification[]>(url)
      .pipe(
        tap(deleted => console.log('get Request')),
        catchError(handleError('failed to get request', []))
      );
  }

  accept(idNotification: number){
    const url= CONST.URL_GET_NOTIFICATION_ACCEPT.replace('{id}', idNotification.toString());
    return this.httpClient.get<Notification>(url)
      .pipe(
        tap(accepted => console.log('accepted')),
        catchError(handleError('failed to get request'))
      );
  }

  hide(idNotification: number){
    const url= CONST.URL_GET_NOTIFICATION_HIDE.replace('{id}', idNotification.toString());
    return this.httpClient.get<Notification>(url)
      .pipe(
        tap(accepted => console.log('hide')),
        catchError(handleError('failed to hide'))
      );
  }

}
