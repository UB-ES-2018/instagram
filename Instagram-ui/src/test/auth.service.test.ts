import { Observable } from 'rxjs';
import { User } from '../app/model/User';

export class AuthServiceTest {
    logStatus: boolean;
    logUser: User = User.createDummy();
    setLogin(username: string, password: string): Observable<User> {
        return null;
    }
    removeLogin(): void {
        return null;
    }
    constructor() {

    }

}
