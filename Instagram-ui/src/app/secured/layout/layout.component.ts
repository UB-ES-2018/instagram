import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';
import { NgbPopover, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../service/notification.service';
import { Notification } from '../../model/Notification';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  
})
export class LayoutComponent implements OnInit {

  profilename: string;
  notifications: Notification[];
  requests: Notification[];
  showRequests: boolean;
  requestQuantity: number;

  constructor(private router: Router, public authenticationService: authService, private notificationService: NotificationService) { 
  }
  ngOnInit() {
    if (this.authenticationService.logUser) {
      this.profilename = this.authenticationService.logUser.username;
      this.getNotifications();
      this.getRequest();
      this.showRequests = false;
    } else {
      this.profilename = null;
    }


  }

  private getNotifications() {
    this.notificationService.getNotification(this.authenticationService.logUser.id).subscribe(
      load => {
        this.notifications = load;
        this.notifications = this.notifications.slice().reverse()
        this.formatDate(this.notifications);
        console.log("Notifications loaded: " + load);
      }
    )
  }
  private getRequest(){
    this.notificationService.getRequest(this.authenticationService.logUser.id).subscribe(
      load => {
        this.requests = load;
        this.requests = this.requests.slice().reverse()
        this.requestQuantity = this.requests.length;
        console.log("Requests loaded: " + load);
        console.log(load)
      }
    )
  }


  formatDate(list: Notification[]){
    for(let notification of list){
      const time = (new Date).getTime();
      const time_diff = (time - notification.createdAt)/1000;
      if(time_diff < 6000){
        notification.createdString = (Math.floor(time_diff/60) + "m");
      }else if(time_diff < 144000){
        notification.createdString = (Math.floor(time_diff/1440) + "h");
      }else if(time_diff < 720000){
        notification.createdString = (Math.floor(time_diff/7200) + "d");
      }else{
        notification.createdString = (Math.floor(time_diff/50400) + "w");
      }  
    }  
  }

  onKeydown(event) {
    this.router.navigate([event.target.value]);
  }

  logout() {
    localStorage.removeItem('isLoggedin');
  }


  toggleRequests(){
    this.showRequests = !this.showRequests;
  }

  acceptFollow(id: number){

  }

  hideFollow(id: number){

  }
}
