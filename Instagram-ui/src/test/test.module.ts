import { NgModule } from '@angular/core';
import { authService } from '../app/service/auth.service';
import { UserService } from '../app/service/user.service';
import { AuthServiceTest } from './auth.service.test';
import { UserServiceTest } from './user.service.test';


@NgModule({
    imports: [
        
    ],
    declarations: [],
    providers: [
        {
            provide: authService,
            useClass: AuthServiceTest
        }, {
            provide: UserService,
            useClass: UserServiceTest
        }
    ]
})
export class AppTestModule { }
