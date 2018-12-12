import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordComponent } from './edit-password.component';
import { AppTestModule } from '../../../../test/test.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { of, throwError } from 'rxjs';

describe('EditPasswordComponent', () => {
  let component: EditPasswordComponent;
  let fixture: ComponentFixture<EditPasswordComponent>;
  let userService: UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPasswordComponent],
      imports: [AppTestModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasswordComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change password if everything is ok', () => {
    const pass = 'pass';
    component.newPass = pass;
    component.confirmNewPass = pass;
    spyOn(userService, 'modifyPass').and.callFake(observableTrue);
    component.cambiarPassword();
    expect(userService.modifyPass).toHaveBeenCalled();
    expect(component.oldPasswordWrong === false);
  });

  it('should not change password and pop up an error if passwords dont match', () => {
    const pass = 'pass';
    component.newPass = pass;
    component.confirmNewPass = pass + 'asdf';
    spyOn(userService, 'modifyPass').and.returnValue(of(true));
    component.cambiarPassword();
    expect(userService.modifyPass).toHaveBeenCalledTimes(0);
    expect(component.oldPasswordWrong === true);
  });

  it('should not change password if the original password is wrong', () => {
    const pass = 'pass';
    component.newPass = pass;
    component.confirmNewPass = pass;
    spyOn(userService, 'modifyPass').and.returnValue(of(false));
    component.cambiarPassword();
    expect(userService.modifyPass).toHaveBeenCalled();
    expect(component.oldPasswordWrong === true);
  });

  it('should not change password if server crashes', () => {
    const pass = 'pass';
    component.newPass = pass;
    component.confirmNewPass = pass;
    spyOn(userService, 'modifyPass').and.callFake(observableThrown);
    component.cambiarPassword();
    expect(userService.modifyPass).toHaveBeenCalled();
    expect(component.oldPasswordWrong === true);
  });
});

function observableTrue(pass: string, username: string, newpass: string) {
  return of(true);
}

function observableThrown(pass: string, username: string, newpass: string) {
  return throwError('error');
}
