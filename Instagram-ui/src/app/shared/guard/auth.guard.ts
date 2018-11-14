import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: authService) {}

    canActivate() {
        if (this.authenticationService.logUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
