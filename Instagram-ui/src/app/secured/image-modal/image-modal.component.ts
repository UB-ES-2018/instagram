import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostLoad } from '../../model/PostLoad';
import { Coment } from '../../model/Coment';
import { PostService } from '../../service/post.service';

import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Follow } from '../../model/Follow';
import { Like } from '../../model/Like';
import { authService } from '../../service/auth.service';
import { FollowService } from '../../service/follow.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
  })


export class ImageModalComponent implements OnInit {
    @Input() postId: number;

    @ViewChild('modalUpload') modalUpload: ElementRef;
    @ViewChild('cmnt') cmnt:ElementRef;

    constructor(private router: ActivatedRoute, private userService: UserService,
        private ruta: Router, private authenticationService: authService,
        private followService: FollowService, private modalService: NgbModal,
        private postService: PostService) { }


    post: PostLoad = PostLoad.createDummy();;
    follow_check: Follow = Follow.createDummy();

    ngOnInit() {
        this.AjotitaTest(this.postId);
        this.checkFollowStatus(this.post.idUser);
    }

    formatDate(){
        let formattedDate = new Date(this.post.createdAt);

        let options: Intl.DateTimeFormatOptions = {
            day: "numeric", month: "long", year: "numeric"
        };
        this.post.createdAt = formattedDate.toLocaleDateString("en-GB", options);
        
    }

    private AjotitaTest(post_id: number){
        let user_id: number;
        if (this.authenticationService.logStatus) {
            user_id = this.authenticationService.logUser.id;
        }else{
            user_id = null;
        }
        this.postService.requestIdPostByIdPostAndLoggin(post_id,user_id).subscribe(
            postLoad =>{
            this.post = postLoad
            this.formatDate()
            console.log(this.post);
            }
        );
    }
    

    checkFollowStatus(followed: number) {
        this.followService.checkFollow(followed, this.authenticationService.logUser.id).subscribe(follow_check => {
            this.follow_check = follow_check;
        }, error => console.error('error checking follow ' + error));
    }

    // Follower status checking, will use auth-user followers
    checkFollowedStatus(followed_id: number) {
        if (this.follow_check.accepted) {
            console.log("followed true")
            return true;
        } else {
            return false;
        }
    }

    isLogged() {
        if (this.authenticationService.logUser) {
            return true;
        } else {
            return false;
        }
    }

    selfFollowCheck(id: number) {
        if (id !== this.authenticationService.logUser.id) {
            return true;
        } else {
            return false;
        }
    }

    sendFollow(followed_id: number) {
        this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(
            response => {
            this.checkFollowStatus(this.post.idUser);
            }
        );
    }

    sendUnfollow(followed_id: number) {
        this.followService.unFollow(this.authenticationService.logUser.id, followed_id).subscribe(
            response => {
            this.checkFollowStatus(this.post.idUser);
            }
        );
    }

    sendLikeComment(comment_id: number) {
        //this.likeService.likeComment(this.authenticationService.logUser.id, comment_id).subscribe(
        //    response => {
        //    this.AjotitaTest(this.post.idPost);
        //    }
        //);
    }

    sendDislikeComment(comment_id: number) {
        //this.likeService.dislikeComment(this.authenticationService.logUser.id, comment_id).subscribe(
        //    response => {
        //    this.AjotitaTest(this.post.idPost);
        //    }
        //);
    }

    sendLike() {
        //this.likeService.likePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
        //    response => {
        //    this.AjotitaTest(this.post.idPost);
        //    }
        //);
    }

    sendDislike() {
        //this.likeService.dislikePost(this.authenticationService.logUser.id, this.post.idPost).subscribe(
        //    response => {
        //    this.AjotitaTest(this.post.idPost);
        //    }
        //);
    }

    sendComment(text: string){
        console.log('sending comment: ' + text);
        this.cmnt.nativeElement.value = '';
    }
    
}