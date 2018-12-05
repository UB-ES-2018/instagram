import { Observable } from 'rxjs';
import { Follow } from '../app/model/Follow';


export class FollowServiceTest {


    requestFollow(follower:number,followed:number): Observable<Follow> {
        return null;
    }

    unFollow(follower:number,followed:number){
        return null;

    }

    checkFollow(followed:number, follower:number):  Observable<Follow> {
        return null;

    }

    constructor() {

    }

}
