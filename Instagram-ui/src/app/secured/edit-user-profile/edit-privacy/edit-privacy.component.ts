import { Component, OnInit } from '@angular/core';
import { authService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { and } from '@angular/router/src/utils/collection';
import { User } from '../../../model/User';

@Component({
  selector: 'app-edit-privacy',
  templateUrl: './edit-privacy.component.html',
  styleUrls: ['./edit-privacy.component.scss']
})
export class EditPrivacyComponent implements OnInit {

  constructor(private authentiactionService: authService, private userService: UserService) { }
  privacy: boolean;
  user: User;
  ngOnInit() {
    this.privacy = this.authentiactionService.logUser.privacity;
  }
  changePrivacy(){
    this.userService.updatePrivacity(this.authentiactionService.logUser.id).subscribe(
      user=> {
        this.authentiactionService.logUser = user;
        sessionStorage.setItem('authenticatedUser',  btoa(JSON.stringify(this.authentiactionService.logUser)));
        this.privacy = this.authentiactionService.logUser.privacity;
      }
    );
  }

}
