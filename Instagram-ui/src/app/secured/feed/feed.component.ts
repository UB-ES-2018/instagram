import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/models/profile.model';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Follow } from '../../model/Follow';
import { authService } from '../../service/auth.service';
import { FollowService } from '../../service/follow.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { loadQueryList } from '@angular/core/src/render3/instructions';
import { PostService } from '../../service/post.service';
import { PostLoad } from '../../model/PostLoad';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { PostPerfil } from '../../model/PostPerfil';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  userID: number;
  user: User = User.createDummy();
  perfilPhotos: PostPerfil[];

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal,
    private postService: PostService) { }

  ngOnInit() {
    this.userID = this.authenticationService.logUser.id;
    this.loadPhotosForPerfil(this.userID);
  }

  private loadPhotosForPerfil(idUser: number) {
    this.postService.requestPhotosForPerfil(idUser).subscribe(
      postPerfil => {
        this.perfilPhotos = postPerfil;
        this.perfilPhotos = this.perfilPhotos.slice().reverse()
        console.log(this.perfilPhotos);
      }
    );
  }

}
