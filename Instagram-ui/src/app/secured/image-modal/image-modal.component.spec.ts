import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestModule } from '../../../test/test.module';
import { ImageModalComponent } from './image-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';
import { of } from 'rxjs';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Follow } from '../../model/Follow';
import { PostLoad } from '../../model/PostLoad';
import { PostService } from '../../service/post.service';
import { FollowService } from '../../service/follow.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;
  let router: Router;
  let AuthService: authService;
  let userService: UserService;
  let postService: PostService;
  let followService: FollowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [NgbModal, NgbActiveModal],
      declarations: [ImageModalComponent],
      imports: [AppTestModule, NgbModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    AuthService = fixture.debugElement.injector.get(authService);
    userService = fixture.debugElement.injector.get(UserService);
    postService = fixture.debugElement.injector.get(PostService);
    followService = fixture.debugElement.injector.get(FollowService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    spyOn(component, "AjotitaTest");
    const post = PostLoad.createDummy();
    spyOn(postService, 'requestIdPostByIdPostAndLoggin');
    expect(component).toBeTruthy();
  });

  it('should not show buttons if not logged in', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = User.createDummy();
    AuthService.logStatus = false;
    const follow = Follow.createDummy();
    component.follow_check = follow;
    let temp = component.checkFollowedStatus(1);
    component.ngOnInit();
    expect(temp).toEqual(false);
  });

  it('should send a text and receive a post', () => {
    expect(component).toBeTruthy();
    const id = 1;
    const post = PostLoad.createDummy();
    spyOn(postService, 'requestIdPostByIdPostAndLoggin').and.returnValue(of(post));
    component.AjotitaTest(id);
    expect(component.post).toEqual(post);
  });

  it('function checkers should work', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = User.createDummy();
    let selfCheck = component.selfFollowCheck(12);    
    expect(selfCheck == false);
  });

  it('should stay truthy after calling functions', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = User.createDummy(); 
    AuthService.logStatus = true;  
    component.sendLikeComment(12);
    component.sendDislikeComment(12);
    component.sendLike();
    component.sendDislike();
    component.sendComment("test");
    component.deleteComment(1);

    expect(component).toBeTruthy();    
  });





});
