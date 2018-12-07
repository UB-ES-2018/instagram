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
import { CommentService } from '../../service/CommentService';
import { LikeCommentService } from '../../service/LikeComment';
import { LikeService } from '../../service/LikeService';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @ViewChild('cmnt') cmnt:ElementRef;

  userID: number;
  user: User = User.createDummy();
  perfilPhotos: PostPerfil[];
  feedPhotos: PostLoad[];
  post1: PostLoad = PostLoad.createDummy();
  post2: PostLoad = PostLoad.createDummy();;
  post3: PostLoad = PostLoad.createDummy();;

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal,
    private postService: PostService,
    private commentService: CommentService,
    private likeCommentService: LikeCommentService,
    private likeService: LikeService) { }

  ngOnInit() {
    this.userID = this.authenticationService.logUser.id;
    //this.loadPhotosForPerfil(this.userID);
    this.loadPhotosForFeed(this.userID);
  }

  private loadPhotosForPerfil(idUser: number) {
    this.postService.requestPhotosForPerfil(idUser).subscribe(
      postPerfil => {
        this.perfilPhotos = postPerfil;
        this.perfilPhotos = this.perfilPhotos.slice().reverse();
        console.log(this.perfilPhotos);
      }
    );
  }
  
  private loadPhotosForFeed(idUser: number) {
    /*
    this.postService.requestPhotosForFeed(idUser).subscribe( 
      postFeed =>{
          this.feedPhotos = postFeed;
          this.feedPhotos = this.feedPhotos.slice().reverse();
          console.log(this.feedPhotos);
      }
    );
    */
    this.feedPhotos = [this.post1, this.post2, this.post3];
  }

  sendLikeComment(comment_id: number) {
    /*  
    if(this.authenticationService.logStatus){
          this.likeCommentService.submitNewLikeToComment(comment_id,this.authenticationService.logUser.id).subscribe(
              response =>{
                  console.log('puta que oferton ' + response);
              }
          )
          //this.likeService.likeComment(this.authenticationService.logUser.id, comment_id).subscribe(
          //    response => {
          //    this.AjotitaTest(this.post.idPost);
          //    }
          //);
          //this.AjotitaTest(this.postId);
      }else{
          this.ruta.navigate(['login']);
      }
      */
  }

  isLogged() {
    return (this.authenticationService.logUser);
  }

  sendDislikeComment(comment_id: number) {
    /*  
    if(this.authenticationService.logStatus){
          this.likeCommentService.deleteLikeToComment(comment_id,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          //this.likeService.dislikeComment(this.authenticationService.logUser.id, comment_id).subscribe(
          //    response => {
          //    this.AjotitaTest(this.post.idPost);
          //    }
          //);
          //this.AjotitaTest(this.postId);
      }else{
          this.ruta.navigate(['login']);
      }
      */
  }

  sendLike() {
    /*  
      if(this.authenticationService.logStatus){
          this.likeService.submitLikeToImage(this.post.idPost,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          //this.likeService.likePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
          //    response => {
          //    this.AjotitaTest(this.post.idPost);
          //    }
          //);
          //this.AjotitaTest(this.postId);
      }else{
          this.ruta.navigate(['login']);
      }
      */
  }

  sendDislike() {
    /*  
      if(this.authenticationService.logStatus){
          this.likeService.deleteLike(this.post.idPost,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          //this.likeService.dislikePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
          //    response => {
          //    this.AjotitaTest(this.post.idPost);
          //    }
          //);
          //this.AjotitaTest(this.postId);
      }else{
          this.ruta.navigate(['login']);            
      }
      */
  }

  sendComment(text: string){
    /*  
      if(this.authenticationService.logStatus){
          this.commentService.submitNewComment(this.post.idPost,this.authenticationService.logUser.id,text).subscribe(
              response => {
                  //podria solicitar de nuevo todo que me da pereza hacer de una manera eficiente :D
                  //this.ngOnInit();
                  console.log(response);
              }
          )
          console.log('sending comment: ' + text);
          this.cmnt.nativeElement.value = '';
          //this.AjotitaTest(this.postId);
      }else{
          this.ruta.navigate(['login']);
      }
      */
  }
  //no se si hace falta pero esta implementado
  deleteComment(idComment: number){
      if(this.authenticationService.logStatus){
          this.commentService.deleteCommentById(idComment).subscribe(
              response => {
                  console.log(response);
              }
          )
      }
  }

}
