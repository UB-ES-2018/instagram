import { Observable, of } from 'rxjs';
import { Follow } from '../app/model/Follow';







export class FollowServiceTest {
    requestFollow(follower: number, followed: number): Observable<Follow> {
        return of(Follow.createDummy());
    }


    unFollow(follower: number, followed: number): Observable<Follow> {
        return of(Follow.createDummy());
    }


    checkFollow(followed: number, follower: number): Observable<Follow> {
        return of(Follow.createDummy());
    }



}