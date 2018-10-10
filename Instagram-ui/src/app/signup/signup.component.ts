import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../router.animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/User';
import { UserService } from '../service/user.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    @ViewChild('modalOk') modalOk: ElementRef;

    @ViewChild('modalError') modalError: ElementRef;

    @ViewChild('registerForm') registerForm: NgForm;

    user: User;
    errorMessage: String;
    confirmPassword: String;

    constructor(private userService: UserService,
                private router: Router,
                private modalService: NgbModal) {}

    ngOnInit() {
        this.user = new User();
        this.confirmPassword = '';
    }

    onClickRegisterButton() {
        if (!this.registerForm.valid) {
            this.errorMessage = 'NoValidForm';
            this.modalService.open(this.modalError);
            return;
        }

        if (this.user.password !== this.confirmPassword) {
            this.errorMessage = 'NoCoincidentPassword';
            this.modalService.open(this.modalError);
            return;
        }

        this.userService.registerUser(this.user).subscribe(
            newUser => {
                this.modalService.open(this.modalOk).result.then((result) => {
                    this.router.navigateByUrl('/login');
                }, (reason) => {
                    this.router.navigateByUrl('/login');
                });
            },
            error => {
                this.errorMessage = this.getErrorMessage(error);
                this.modalService.open(this.modalError);
            }
        );
    }
    getErrorMessage(error) {
        if (error.error === null || error.error === undefined) {
            return 'ERROR';
        }

        const code = error.error.code;
        if (code === null || code === undefined) {
            return 'ERROR';
        }

        if (code === 1003) {
            return 'RepeatedUsername';
        } else if (code === 1002) {
            return 'InvalidUsername';
        } else if (code === 1004) {
            return 'RepeatedEmail';
        }
    }
    onClickCancelButton() {
        this.router.navigateByUrl('/login');
    }
}
