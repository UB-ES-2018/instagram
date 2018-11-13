import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditUserProfileRoutingModule } from './edit-user-profile-routing.module';
import { EditProfileDataComponent } from './edit-profile-data/edit-profile-data.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    EditUserProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [EditProfileComponent, EditProfileDataComponent, EditPasswordComponent]
})
export class EditUserProfileModule { }
