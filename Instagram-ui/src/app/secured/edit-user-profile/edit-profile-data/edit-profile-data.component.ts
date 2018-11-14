import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { authService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/User';

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
    var user = this.authentiactionService.logUser;

    if (this.form.get('name').touched) {
      user.name = this.form.get('name').value
    }

    if (this.form.get('username').touched){
      user.username = this.form.get('username').value
    }

    if (this.form.get('bio').touched){
      user.bio = this.form.get('bio').value
    }
    if (this.form.get('email').touched){
      user.email = this.form.get('email').value
    }
    if (this.form.get('phoneNumber').touched){
      user.phoneNumber = this.form.get('phoneNumber').value
    }
    if (this.form.get('gender').touched){
      user.gender = this.form.get('gender').value
    }
    if(this.form.get('website').touched){
      user.website = this.form.get('website').value
    }
    console.log(user)
    this.userService.changeUserData(user).subscribe(
      response=>{
        this.authentiactionService.logUser = response;
      }
    )
  }


}
