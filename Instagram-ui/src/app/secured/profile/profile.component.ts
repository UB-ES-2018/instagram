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
import { NotificationService } from '../../service/notification.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  @ViewChild('modalFollowed') modalFollowed: ElementRef;
  @ViewChild('modalFollowers') modalFollowers: ElementRef;
  @ViewChild('modalUpload') modalUpload: ElementRef;
  @ViewChild('modalImage') modalImage: ElementRef;
  @ViewChild('modalSettings') modalSettings: ElementRef;


  profileID: string;
  user: User = User.createDummy();
  followers: number;
  followeds: number;
  follower_list: User[];
  followed_list: User[];
  self_followed_list: User[];

  followed_status: Follow[];
  follower_status: Follow[];

  follow_check: Follow = Follow.createDummy();
  posts: number;
  image64: string;
  imagePresent: boolean;
  descripcionFoto: string;
  foto: string;
  post: PostLoad;
  perfilPhotos: PostPerfil[];
  fotoSubida: boolean;
  clickedImageId: number;

  imageRef: NgbModalRef;

  privacy: boolean;

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal,
    private postService: PostService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.profileID = params.profileID;
      this.loadUser();
      this.selfFollowedList();
    });
    this.imagePresent = false;
    this.fotoSubida = false;
    this.AjotitaTest();
    this.getNotifications();
    this.getRequest();
  }
  private getNotifications() {
    this.notificationService.getNotification(this.authenticationService.logUser.id).subscribe(
      load => {
        console.log(load);
      }
    )
  }
  private getRequest(){
    this.notificationService.getRequest(this.authenticationService.logUser.id).subscribe(
      load => {
        console.log(load);
      }
    )
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
  private AjotitaTest() {
    this.postService.requestIdPostByIdPostAndLoggin(1, 6).subscribe(
      postLoad => {
        this.post = postLoad;
        console.log(this.post);
      }
    );
  }
  private loadUser() {
    this.userService.getProfile(this.profileID).subscribe(user => {
      this.user = user;
      this.loadUserInfo();
      this.checkFollowStatus(this.user.id);
      this.loadPhotosForPerfil(this.user.id);
      this.privacy = this.user.privacity;
    }, error => {
      console.error('error retrieving user data ' + error);
      this.ruta.navigate(['not-found']);
    });
  }
  private loadUserInfo() {
    this.userService.getAmountFolloweds(this.user.id).subscribe(followeds => {
      this.followeds = followeds;
    }, error => console.error('error retrieving followeds data ' + error));
    this.userService.getAmountFollowers(this.user.id).subscribe(followers => {
      this.followers = followers;
    }, error => console.error('error retrieving followers data ' + error));

    this.userService.getFolloweds(this.user.id).subscribe(followed_list => {
      this.followed_list = followed_list;
    }, error => console.error('Error retrieving the followed list ' + error));
    this.userService.getFollowers(this.user.id).subscribe(follower_list => {
      this.follower_list = follower_list;
    }, error => console.error('Error retrieving the follower list ' + error));

  }
  isAuthUser() {
    // console.log(this.authenticationService.logUser.username +"------"+this.user.username);
    if (this.authenticationService.logUser && this.user) {
      return this.authenticationService.logUser.username === this.user.username;
    }
    return false;
  }

  isLogged() {
    if (this.authenticationService.logUser) {
      return true;
    } else {
      return false;
    }
  }

  sendFollow(followed_id: number) {
    this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(
      response => {
        this.checkFollowStatus(this.user.id);
        this.selfFollowedList();
        this.loadUserInfo();
        this.loadFollowedStatus();
        this.loadFollowerStatus();
      }
    );
  }
  sendUnfollow(followed_id: number) {
    this.followService.unFollow(this.authenticationService.logUser.id, followed_id).subscribe(
      response => {
        this.checkFollowedStatus(this.user.id);
        this.selfFollowedList();
        this.loadUserInfo();
        this.follow_check.accepted = null;
        this.loadFollowedStatus();
        this.loadFollowerStatus();
      }
    );
  }
  followedPopUp() {
    if (this.authenticationService.logUser && this.user) {
      this.modalService.open(this.modalFollowed, { centered: true, size: 'sm', windowClass: 'modal-cs' });
      this.loadFollowedStatus();
    } else {
      this.ruta.navigate(['login']);
    }
  }

  followersPopUp() {
    if (this.authenticationService.logUser && this.user) {
      this.modalService.open(this.modalFollowers, { centered: true, size: 'sm', windowClass: 'modal-cs' });
      this.loadFollowerStatus();
    } else {
      this.ruta.navigate(['login']);
    }
  }

    // load followed users requests status
    loadFollowedStatus(){
      this.followed_status = [];
      for(let user of this.followed_list){
        this.followService.checkFollow(user.id, this.authenticationService.logUser.id).subscribe(response => {
          this.followed_status.push(response);
        });
      }
    }
  
    loadFollowerStatus(){
      this.follower_status = [];
      for(let user of this.follower_list){
        this.followService.checkFollow(user.id, this.authenticationService.logUser.id).subscribe(response => {
          this.follower_status.push(response);
        });
      }
    }

  uploadPopup() {
    this.modalService.open(this.modalUpload, { centered: true, size: 'sm', windowClass: 'modal-cs' });

  }


  // Profile button check, called on init
  checkFollowStatus(followed: number) {
    if (this.authenticationService.logStatus) {
      this.followService.checkFollow(followed, this.authenticationService.logUser.id).subscribe(follow_check => {
        this.follow_check = follow_check;
      }, error => console.error('error checking follow ' + error));
    }
  }

  selfFollowCheck(id: number) {
    return (id !== this.authenticationService.logUser.id);
  }
  // Follower status checking, will use auth-user followers
  checkFollowedStatus(followed_id: number) {
    return (this.self_followed_list.filter(user => (user.id === followed_id)).length > 0);
  }

  checkFollowedAcceptedStatus(followed_id: number){
    var statusFilter = this.followed_status.filter(follow => (follow.followed === followed_id));
    if(statusFilter.length > 0){
      return statusFilter[0].accepted;
    }else{
      return null;
    }
  }

  checkFollowerAcceptedStatus(follower_id: number){
    var statusFilter = this.follower_status.filter(follow => (follow.followed === follower_id));
    if(statusFilter.length > 0){
      return statusFilter[0].accepted;
    }else{
      return null;
    }
  }

  //
  selfFollowedList() {
    if (this.authenticationService.logStatus) {
      this.userService.getFolloweds(this.authenticationService.logUser.id).subscribe(self_followed_list => {
        this.self_followed_list = self_followed_list;
      }, error => console.error('Error retrieving the self followed list ' + error));
    }
  }


  subirFoto(event) {
    this.fotoSubida = false;
    this.imagePresent = false;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.foto = reader.result.toString();
      };
    }
    if (this.foto !== '') {
      this.imagePresent = true;
    }
  }

  enviarFoto() {
    this.userService.uploadImage(this.foto, this.descripcionFoto, this.authenticationService.logUser.id, new Date()).subscribe(resposta => {
      console.log('uploaded!');
      this.fotoSubida = true;
      this.imagePresent = false;
      this.descripcionFoto = '';
      this.loadPhotosForPerfil(this.authenticationService.logUser.id);
    });
  }

  imagePopUp(id_image: number) {
    this.clickedImageId = id_image;
    this.imageRef = this.modalService.open(this.modalImage, { centered: true, size: 'lg', windowClass: 'modal-img' });
  }

  closeImage() {
    this.imageRef.close();
  }

  settingsPopUp() {
    if (this.authenticationService.logUser && this.user) {
      this.modalService.open(this.modalSettings, { centered: true, size: 'sm', windowClass: 'modal-cs' });
    } else {
      this.ruta.navigate(['login']);
    }
  }

  logOut() {
    this.authenticationService.removeLogin();
    this.ruta.navigate(['login']);
  }

}

