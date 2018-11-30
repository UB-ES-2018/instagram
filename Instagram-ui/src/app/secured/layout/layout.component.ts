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
  toSearch: string;
  showSearch: boolean;
  amountFound: number;
  constructor(private router: Router, public authenticationService: authService, private userService: UserService) { }
  ngOnInit() {
    // this.profilename = this.authenticationService.logUser.name;
    if (this.authenticationService.logUser) {
      this.profilename = this.authenticationService.logUser.username;
    } else {
      this.profilename = null;
    }
    this.showSearch = false;
    this.amountFound = 0;
  }

  onKeydown(event) {
    this.router.navigate([event.target.value]);
  }

  logout() {
    localStorage.removeItem('isLoggedin');
  }

  private keyManagement(event) {
    if (event.key === 'arrowdown') {
      this.showSearch = true;
    } else if (event.key === 'arrowup') {

    } else {
      this.loadUsersSearch();
    }
  }

  private loadUsersSearch() {
    const text = this.toSearch;
    /*if (text === '') {
      console.log('nothing to search');
      this.showSearch = false;
    }*/
    /*this.userService.searchUsers(text).subscribe(
      searchResult => {
        this.searchResult = searchResult;
      }
    );*/
    this.searchResult = new Array(20).fill(this.authenticationService.logUser);
    this.amountFound = this.searchResult.length;
  }

  private changeUser(usuario: string) {
    this.toSearch = '';
    this.router.navigate([usuario]);
  }

  buscadorFocus() {
    this.showSearch = true;
  }
  buscadorFree() {
    this.showSearch = false;
  }

}
