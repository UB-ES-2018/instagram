import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}
