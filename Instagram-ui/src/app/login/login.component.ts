import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

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
                private userService: UserService ) {}

    ngOnInit() {
    }
    ngDoCheck(){
        console.log(this.password);
        console.log(this.username);
        console.log(this.user);
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    onClickRegisterButton(){
        this.userService.setLogin(this.username,this.password).subscribe(
            user => {
                this.user = user
                this.router.navigateByUrl('/perfil'); 
            });
    }
}
