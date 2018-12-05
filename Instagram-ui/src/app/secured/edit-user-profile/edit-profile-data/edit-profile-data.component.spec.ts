import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditProfileDataComponent } from './edit-profile-data.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppTestModule } from '../../../../test/test.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../service/user.service';
import { of, throwError } from 'rxjs';
import { authService } from '../../../service/auth.service';
import { User } from '../../../model/User';


describe('EditProfileDataComponent', () => {
  let component: EditProfileDataComponent;
  let fixture: ComponentFixture<EditProfileDataComponent>;
  let userService: UserService;
  let AuthService: authService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileDataComponent],
      imports: [AppTestModule, NgbModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileDataComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    AuthService = fixture.debugElement.injector.get(authService);
    fixture.detectChanges();
  });

  it('should update all fields from the user', () => {
    const user = User.createDummy();
    expect(component).toBeTruthy();
    component.form.get('name').setValue('qwe');
    component.form.get('name').markAsTouched();
    component.form.get('username').setValue('qwe');
    component.form.get('username').markAsTouched();
    component.form.get('bio').setValue('qwe');
    component.form.get('bio').markAsTouched();
    component.form.get('email').setValue('qwe');
    component.form.get('email').markAsTouched();
    component.form.get('phoneNumber').setValue('qwe');
    component.form.get('phoneNumber').markAsTouched();
    component.form.get('gender').setValue('Male');
    component.form.get('gender').markAsTouched();
    component.form.get('website').setValue('qwe');
    component.form.get('website').markAsTouched();
    spyOn(userService, 'changeUserData').and.returnValue(of(user));
    component.enviar();
    expect(AuthService.logUser === user);
    expect(component.profileUpdated === true);

  });
});
