import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditProfileDataComponent } from './edit-profile-data/edit-profile-data.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';



const routes: Routes = [
    {
        path: '',
        component: EditProfileComponent,
        children: [
            { path: '', redirectTo: 'edit'},
            { path: 'edit', component: EditProfileDataComponent},
            { path: 'password', component: EditPasswordComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditUserProfileRoutingModule { }
