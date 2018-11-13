import { Component, OnInit } from '@angular/core';
import { authService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  constructor(private authentiactionService: authService, private userService: UserService) { }
  username: string;
  newPass: string;
  confirmNewPass: string;
  pass: string;
  passwordsMissmatch = false;
  oldPasswordWrong = false;
  ngOnInit() {
    this.username = this.authentiactionService.logUser.username;

  }

  cambiarPassword() {
    this.oldPasswordWrong = false;
    this.passwordsMissmatch = false;
    if (this.confirmNewPass === this.newPass) {
      this.userService.modifyPass(this.pass, this.username, this.newPass).subscribe(
        response => {
          if(response){
            this.oldPasswordWrong = true;
          }
      }, error => {
        this.oldPasswordWrong = true;
      });
      //this.userService.modifyPass(this.newPass, this.pass, this.username)
    } else {
      this.passwordsMissmatch = true;
    }

  }

}
