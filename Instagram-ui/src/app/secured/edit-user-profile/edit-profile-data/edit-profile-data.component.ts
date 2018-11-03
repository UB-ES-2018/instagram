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
  }

  enviar() {
    if (this.form.get('name').touched) {
      this.userService.modifyName(this.form.get('name').value, this.authentiactionService.logUser.username).subscribe(result => {
        this.authentiactionService.logUser.name = result.name;
      });
    }
  }


}
