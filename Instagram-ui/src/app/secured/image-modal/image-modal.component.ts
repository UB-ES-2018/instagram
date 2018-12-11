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
import { CommentService } from '../../service/CommentService';
import { LikeCommentService } from '../../service/LikeComment';
import { LikeService } from '../../service/LikeService';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
  })


export class ImageModalComponent implements OnInit {
    @Input() postId: number;
    @Input() c;
    @Input() d;

    @ViewChild('cmnt') cmnt:ElementRef;

    constructor(private router: ActivatedRoute, private userService: UserService,
        private ruta: Router, private authenticationService: authService,
        private followService: FollowService, private modalService: NgbModal,
        private postService: PostService,
        private commentService: CommentService,
        private likeCommentService: LikeCommentService,
        private likeService: LikeService) { }


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
        if(this.authenticationService.logStatus){
            this.followService.checkFollow(followed, this.authenticationService.logUser.id).subscribe(follow_check => {
                this.follow_check = follow_check;
            }, error => console.error('error checking follow ' + error));
        }
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
        return (this.authenticationService.logUser);
    }

    selfFollowCheck(id: number) {
        return (id !== this.authenticationService.logUser.id);
    }

    sendFollow(followed_id: number) {
        if(this.authenticationService.logStatus){
            this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(
                response => {
                this.checkFollowStatus(this.post.idUser);
                }
            );
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);
        }
    }

    sendUnfollow(followed_id: number) {
        if(this.authenticationService.logStatus){
            this.followService.unFollow(this.authenticationService.logUser.id, followed_id).subscribe(
                response => {
                this.checkFollowStatus(this.post.idUser);
                }
            );
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);
        }
    }

    sendLikeComment(comment_id: number) {
        if(this.authenticationService.logStatus){
            this.likeCommentService.submitNewLikeToComment(comment_id,this.authenticationService.logUser.id).subscribe(
                response =>{
                    console.log("Send likeComment" + response);
                }
            )
            //this.likeService.likeComment(this.authenticationService.logUser.id, comment_id).subscribe(
            //    response => {
            //    this.AjotitaTest(this.post.idPost);
            //    }
            //);
            this.AjotitaTest(this.postId);
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);
        }
    }

    sendDislikeComment(comment_id: number) {
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
            this.AjotitaTest(this.postId);
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);
        }
    }

    sendLike() {
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
            this.AjotitaTest(this.postId);
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);
        }
    }

    sendDislike() {
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
            this.AjotitaTest(this.postId);
        }else{
            this.c('Close click')
            this.ruta.navigate(['login']);            
        }
    }

    sendComment(text: string){
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
            this.AjotitaTest(this.postId);
        }else{
            this.c('Close click')
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