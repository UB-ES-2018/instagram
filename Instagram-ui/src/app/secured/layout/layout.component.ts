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

  //@ViewChild('popTitle') popTitle: ElementRef;
  //@ViewChild('popContent') popContent: ElementRef;

  profilename: string;
  notifications: Notification[];
  requests: Notification[];


  constructor(private router: Router, public authenticationService: authService, private notificationService: NotificationService) { 
  }
  ngOnInit() {
    // this.profilename = this.authenticationService.logUser.name;
    if (this.authenticationService.logUser) {
      this.profilename = this.authenticationService.logUser.username;
      this.getNotifications();
      this.getRequest();
    } else {
      this.profilename = null;
    }


  }

  private getNotifications() {
    this.notificationService.getNotification(this.authenticationService.logUser.id).subscribe(
      load => {
        this.notifications = load;
        this.notifications = this.notifications.slice().reverse()
        console.log("Notifications loaded: " + load);
      }
    )
  }
  private getRequest(){
    this.notificationService.getRequest(this.authenticationService.logUser.id).subscribe(
      load => {
        this.requests = load;
        this.requests = this.requests.slice().reverse()
        console.log("Requests loaded: " + load);
      }
    )
  }

  onKeydown(event) {
    this.router.navigate([event.target.value]);
  }

  logout() {
    localStorage.removeItem('isLoggedin');
  }

  /*buscador(idbuscador){
    const abuscar = document.getElementById(idbuscador).nodeValue;
    this.router.navigate([abuscar]);
  }*/

  test(){
    //this.popService.open(this.popContent, { centered: true, size: 'sm', windowClass: 'modal-cs' });
    //this.popService.open()
  }
}
