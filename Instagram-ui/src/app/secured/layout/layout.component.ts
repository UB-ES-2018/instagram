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
  constructor(private router: Router, private authenticationService: authService) { }
  ngOnInit() {
    //this.profilename = this.authenticationService.logUser.name;
    this.profilename = 'zzzz';
    console.log('qqqqqqqqqqqqqqqq ' + this.profilename);
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
