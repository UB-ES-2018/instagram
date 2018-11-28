import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { authService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../model/User';

@Component({
  selector: 'app-edit-profile-data',
  templateUrl: './edit-profile-data.component.html',
  styleUrls: ['./edit-profile-data.component.scss']
})
export class EditProfileDataComponent implements OnInit {
  @ViewChild('modalChangePhotoProfile') modalChangePhotoProfile: ElementRef;

  constructor(private formBuilder: FormBuilder, private authentiactionService: authService, private userService: UserService,
    private modalService: NgbModal) { }
  form: FormGroup;
  username: string;
  profileUpdated: boolean;
  imagePresent: boolean;
  fotoPerfil: string;
  fotoSubida: boolean;
  foto: string;
  image64: string;

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
    this.profileUpdated = false;
    this.fotoPerfil = this.authentiactionService.logUser.photo;
  }

  enviar() {
    this.profileUpdated = false;
    const user = this.authentiactionService.logUser;

    if (this.form.get('name').touched) {
      user.name = this.form.get('name').value;
    }

    if (this.form.get('username').touched) {
      user.username = this.form.get('username').value;
    }

    if (this.form.get('bio').touched) {
      user.bio = this.form.get('bio').value;
    }
    if (this.form.get('email').touched) {
      user.email = this.form.get('email').value;
    }
    if (this.form.get('phoneNumber').touched) {
      user.phoneNumber = this.form.get('phoneNumber').value;
    }
    if (this.form.get('gender').touched) {
      user.gender = this.form.get('gender').value;
    }
    if (this.form.get('website').touched) {
      user.website = this.form.get('website').value;
    }
    this.userService.changeUserData(user).subscribe(
      response => {
        this.authentiactionService.logUser = response;
      }
    );
    this.profileUpdated = true;
  }

  changePhotoProfilePopup() {
    this.modalService.open(this.modalChangePhotoProfile, { centered: true, size: 'sm', windowClass: 'modal-cs' });
  }

  subirFoto(event) {
    this.fotoSubida = false;
    this.imagePresent = false;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.foto = reader.result.toString();
      };
    }
    if (this.foto !== '') {
      this.imagePresent = true;
    }
  }


  enviarFoto() {
    this.userService.updatePerfilPhoto(this.authentiactionService.logUser.id, this.foto).subscribe(resposta => {
      console.log('updated!');
      this.fotoSubida = true;
      this.imagePresent = false;
      this.fotoPerfil = this.foto;
      this.authentiactionService.logUser.photo = this.foto;
    });
  }


  eliminarFoto() {
    this.foto = 'assets/images/defaultlogo.png';
    this.userService.updatePerfilPhoto(this.authentiactionService.logUser.id, this.foto).subscribe(resposta => {
      console.log('updated!');
      this.fotoSubida = true;
      this.imagePresent = false;
      this.fotoPerfil = this.foto;
      this.authentiactionService.logUser.photo = this.foto;
    });
  }
}
