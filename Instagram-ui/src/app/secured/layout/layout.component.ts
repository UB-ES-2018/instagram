import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  profilename: string;
  constructor(private router: Router, public authenticationService: authService) { }
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
}
