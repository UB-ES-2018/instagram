import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../model/User';
import { authService } from '../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    password : string;
    username : string;
    user : User;
    constructor(public router: Router,
                private authService: authService) {}

    ngOnInit() {
        if(this.authService.logStatus){
            this.router.navigateByUrl('/perfil');
        }
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    onClickRegisterButton(){
        this.authService.setLogin(this.username,this.password).subscribe(
            user => {
                this.user = user
                this.router.navigateByUrl('/perfil'); 
            });
    }
}
