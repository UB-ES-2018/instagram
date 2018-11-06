import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { authService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-edit-profile-data',
  templateUrl: './edit-profile-data.component.html',
  styleUrls: ['./edit-profile-data.component.scss']
})
export class EditProfileDataComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authentiactionService: authService, private userService: UserService) { }
  form: FormGroup;
  username: string;
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.authentiactionService.logUser.name],
      username: [this.authentiactionService.logUser.username],
      email: [this.authentiactionService.logUser.email],
      bio: [this.authentiactionService.logUser.bio],
      website: [this.authentiactionService.logUser.website],
      phoneNumber: [this.authentiactionService.logUser.phoneNumber],
      gender: [this.authentiactionService.logUser.gender]
    });
    this.username = this.authentiactionService.logUser.username;
  }

  enviar() {
    if (this.form.get('name').touched) {
      this.userService.modifyName(this.form.get('name').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('username').touched) {
      this.userService.modifyUserName(this.form.get('username').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('bio').touched) {
      this.userService.modifyBio(this.form.get('bio').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('email').touched) {
      this.userService.modifyEMail(this.form.get('email').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('phoneNumber').touched) {
      this.userService.modifyPhone(this.form.get('phoneNumber').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('gender').touched) {
      this.userService.modifyGender(this.form.get('gender').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
    if (this.form.get('website').touched) {
      this.userService.modifyWeb(this.form.get('website').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
  }


}
