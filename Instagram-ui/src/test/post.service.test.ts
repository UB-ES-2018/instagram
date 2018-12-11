import { Observable, of } from 'rxjs';
import { PostLoad } from '../app/model/PostLoad';
import { PostPerfil } from '../app/model/PostPerfil';


export class PostServiceTest {
    requestIdPostByIdPostAndLoggin(idPost: number, idLoggin: number): Observable<PostLoad> {
        return of(null);
    }
    requestPhotosForPerfil(idUser: number): Observable<any[] | PostPerfil[]> {
        return of([]);
    }

}