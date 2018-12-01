import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';
import { NgbPopover, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  
})
export class LayoutComponent implements OnInit {

  //@ViewChild('popTitle') popTitle: ElementRef;
  //@ViewChild('popContent') popContent: ElementRef;

  profilename: string;
  constructor(private router: Router, public authenticationService: authService) { 
  }
  ngOnInit() {
    // this.profilename = this.authenticationService.logUser.name;
    if (this.authenticationService.logUser) {
      this.profilename = this.authenticationService.logUser.username;
    } else {
      this.profilename = null;
    }

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
