import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  profilename: string;
  searchResult: User[];
  constructor(private router: Router, public authenticationService: authService, private userService: UserService) { }
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

  private loadUsersSearch(text: string) {
    this.userService.searchUsers(text).subscribe(
      searchResult => {
        this.searchResult = searchResult;
      }
    );
  }

  buscadorKeyPress() {

  }

  buscadorFocus() {

  }
  buscadorFree() {

  }

}
