import { Observable, of } from 'rxjs';
import { Follow } from '../app/model/Follow';







export class FollowServiceTest {
    requestFollow(follower: number, followed: number): Observable<Follow> {
        return of(null);
    }


    unFollow(follower: number, followed: number): Observable<Follow> {
        return of(null);
    }


    checkFollow(followed: number, follower: number): Observable<Follow> {
        return of(null);
    }



}