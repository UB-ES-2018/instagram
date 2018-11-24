import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostLoad } from '../../model/PostLoad';
import { Coment } from '../../model/Coment';
import { PostService } from '../../service/post.service';

import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Follow } from '../../model/Follow';
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

    constructor(private router: ActivatedRoute, private userService: UserService,
        private ruta: Router, private authenticationService: authService,
        private followService: FollowService, private modalService: NgbModal,
        private postService: PostService) { }


    post: PostLoad = PostLoad.createDummy();;
    

    ngOnInit() {
        this.AjotitaTest(this.postId)
    }

    formatDate(){
        let formattedDate = new Date(this.post.createdAt);

        let options: Intl.DateTimeFormatOptions = {
            day: "numeric", month: "long", year: "numeric"
        };
        this.post.createdAt = formattedDate.toLocaleDateString("en-GB", options);
        
    }

    private AjotitaTest(post_id: number){
        this.postService.requestIdPostByIdPostAndLoggin(post_id,this.authenticationService.logUser.id).subscribe(
            postLoad =>{
            this.post = postLoad
            this.formatDate()
            console.log(this.post);
            }
        );
    }

    
}