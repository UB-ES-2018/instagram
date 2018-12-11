import { NgModule } from '@angular/core';
import { authService } from '../app/service/auth.service';
import { UserService } from '../app/service/user.service';
import { AuthServiceTest } from './auth.service.test';
import { UserServiceTest } from './user.service.test';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { FollowService } from '../app/service/follow.service';
import { FollowServiceTest } from './follow.service.test';
import { PostService } from '../app/service/post.service';
import { PostServiceTest } from './post.service.test';
import { NotificationService } from '../app/service/notification.service';
import { NotificationServiceTest } from './notification.service.test';

import { CommentServiceTest } from './comment.service.test';
import { LikeCommentServiceTest } from './likecomment.service.test';
import { LikeServiceTest } from './like.service.test';

import { CommentService } from '../app/service/CommentService';
import { LikeCommentService } from '../app/service/LikeComment';
import { LikeService } from '../app/service/LikeService';

@NgModule({
    imports: [
        RouterTestingModule
    ],
    declarations: [],
    providers: [
        {
            provide: authService,
            useClass: AuthServiceTest
        }, {
            provide: UserService,
            useClass: UserServiceTest
        }, {
            provide: FollowService,
            useClass: FollowServiceTest
        }, {
            provide: PostService,
            useClass: PostServiceTest
        }, {
            provide: NotificationService,
            useClass: NotificationServiceTest
        }, {
            provide: CommentService,
            useClass: CommentServiceTest
        }, {
            provide: LikeCommentService,
            useClass: LikeCommentServiceTest
        }, {
            provide: LikeService,
            useClass: LikeServiceTest
        },
        FormBuilder
    ],
    exports: [RouterTestingModule]
})
export class AppTestModule { }
