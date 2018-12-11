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
import { PostDto } from '../../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @ViewChild('cmnt') cmnt:ElementRef;

  userID: number;
  user: User = User.createDummy();
  feedPhotos: PostDto[];
  posts: PostLoad[] = [];
  postsSort: PostLoad[] = [];
  array: PostLoad[] = [];
  post: PostLoad;

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal,
    private postService: PostService,
    private commentService: CommentService,
    private likeCommentService: LikeCommentService,
    private likeService: LikeService) { }

  ngOnInit() {
    this.userID = this.authenticationService.logUser.id;
    this.selfFollowedList();
    console.log(this.posts);
  }

  formatDate(){
    let formattedDate = new Date(this.post.createdAt);

    let options: Intl.DateTimeFormatOptions = {
        day: "numeric", month: "long", year: "numeric"
    };
    this.post.createdAt = formattedDate.toLocaleDateString("en-GB", options);
  }

  
  private loadPhotosForFeed(idUser: number) {
    
    
    this.postService.requestPhotosForFeed(idUser).subscribe( 
      postFeed =>{
          this.feedPhotos = postFeed;
          console.log(this.feedPhotos);
          this.requestPostForFeed(this.feedPhotos);
          console.log(this.posts);
      }
    );
  }


  private requestPostForFeed(photos: PostDto[]){
    var i = 0;
    for (let photo of photos){
        this.postService.requestIdPostByIdPostAndLoggin(photo.id, this.authenticationService.logUser.id).subscribe(
            postLoad =>{
                this.post = postLoad;
                i = photos.indexOf(photo);
                this.formatDate();
                this.posts[i] = this.post;
            }
        );
    }

    
    
  }

  private updateFeed(idPost: number){
    
    this.postService.requestIdPostByIdPostAndLoggin(idPost, this.authenticationService.logUser.id).subscribe(
        postLoad =>{
            this.post = postLoad;
            this.formatDate();
            let p = this.posts.filter(postSearch => (postSearch.idPost === idPost));
            this.posts[this.posts.indexOf(p[0])] = this.post;
        }
    );

  }

  selfFollowedList() {
    if (this.authenticationService.logStatus) {
      this.userService.getFolloweds(this.authenticationService.logUser.id).subscribe(self_followed_list => {
        if (self_followed_list.length > 0) this.loadPhotosForFeed(this.userID);
      }, error => console.error('Error retrieving the self followed list ' + error));
    }
  }

  sendLikeComment(comment_id: number, idPost: number) {
    
    if(this.authenticationService.logStatus){
          this.likeCommentService.submitNewLikeToComment(comment_id,this.authenticationService.logUser.id).subscribe(
              response =>{
                  console.log(response);
              }
          )
          this.updateFeed(idPost);

      }else{
          this.ruta.navigate(['login']);
      }
      
  }

  isLogged() {
    return (this.authenticationService.logUser);
  }

  sendDislikeComment(comment_id: number,idPost: number) {
     
    if(this.authenticationService.logStatus){
          this.likeCommentService.deleteLikeToComment(comment_id,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          this.updateFeed(idPost);
      }else{
          this.ruta.navigate(['login']);
      }
      
  }

  sendLike(idPost: number) {
     
      if(this.authenticationService.logStatus){
          this.likeService.submitLikeToImage(idPost,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          this.updateFeed(idPost);
      }else{
          this.ruta.navigate(['login']);
      }
      
  }

  sendDislike(idPost: number) {
     
      if(this.authenticationService.logStatus){
          this.likeService.deleteLike(idPost,this.authenticationService.logUser.id).subscribe(
              response => {
                  console.log(response);
              }
          )
          this.updateFeed(idPost);
      }else{
          this.ruta.navigate(['login']);            
      }
      
  }

  sendComment(idPost: number, text: string){
      
      if(this.authenticationService.logStatus){
          this.commentService.submitNewComment(idPost,this.authenticationService.logUser.id,text).subscribe(
              response => {
                  
                  console.log(response);
              }
          )
          console.log('sending comment: ' + text);
          this.cmnt.nativeElement.value = '';
          this.updateFeed(idPost);
      }else{
          this.ruta.navigate(['login']);
      }
      
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
