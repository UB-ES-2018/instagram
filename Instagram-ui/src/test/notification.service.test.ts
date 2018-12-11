import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from '../app/model/Notification';


@Injectable()
export class NotificationServiceTest {


  constructor() { }

  getNotification(idUser: number) {
    return of([]);
  }

  getRequest(idUser:number) {
    return of([]);
  }

  accept(idNotification: number){
    return null;
  }

  hide(idNotification: number){
    return null;
  }

}
