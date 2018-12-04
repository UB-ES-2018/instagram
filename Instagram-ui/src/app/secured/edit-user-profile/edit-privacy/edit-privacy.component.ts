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
    this.privacy = true;
    //this.privacy = this.authentiactionService.logUser.privacy;
  }
  changePrivacy(){
    //this.user.privacy = !this.authenticationService.logUser.privacy;
    //this.userService.changeUserData(this.user).subscribe(
    //  response => {
    //    this.authentiactionService.logUser = response;
    //  }
    //);
    this.privacy = !this.privacy;
  }

}
