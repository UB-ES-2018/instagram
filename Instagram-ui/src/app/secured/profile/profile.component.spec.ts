import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AppTestModule } from '../../../test/test.module';
import { User } from '../../model/User';
import { authService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { ProfileComponent } from './profile.component';
import { FollowServiceTest } from '../../../test/follow.service.test';
import { PostServiceTest } from '../../../test/post.service.test';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { post } from 'selenium-webdriver/http';
import { PostService } from '../../service/post.service';
import { NotificationService } from '../../service/notification.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let router: Router;
  let AuthService: authService;
  let userService: UserService;
  let postService: PostService;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [AppTestModule, NgbModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    AuthService = fixture.debugElement.injector.get(authService);
    userService = fixture.debugElement.injector.get(UserService);
    postService = fixture.debugElement.injector.get(PostService);
    notificationService = fixture.debugElement.injector.get(NotificationService);
    fixture.detectChanges();
  });



  it('should check if the authenticated user is the same as the currently viewed', () => {
    expect(component).toBeTruthy();
    component.user = null;
    AuthService.logUser.username = 'qwe';
    expect(component.isAuthUser()).toEqual(false);
  });

  it('should check if the authenticated user is the same as the currently viewed', () => {
    expect(component).toBeTruthy();
    component.user.username = 'qwe';
    AuthService.logUser.username = 'qwe';
    expect(component.isAuthUser()).toEqual(true);
  });

  it('should check if the user is logged', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = null;
    expect(component.isLogged()).toEqual(false);
  });

  it('should check if the user is logged', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = User.createDummy();
    expect(component.isLogged()).toEqual(true);
  });

  it('should upload a image', () => {
    expect(component).toBeTruthy();
    AuthService.logUser = User.createDummy();
    AuthService.logUser.id = 12;
    spyOn(userService, 'uploadImage').and.returnValue(of(true));
    spyOn(postService, 'requestPhotosForPerfil').and.returnValue(of([]));
    component.enviarFoto();
    expect(component.fotoSubida).toEqual(true);
    expect(component.imagePresent).toEqual(false);
    expect(component.descripcionFoto).toEqual('');
    expect(postService.requestPhotosForPerfil).toHaveBeenCalledWith(12);
  });

});
