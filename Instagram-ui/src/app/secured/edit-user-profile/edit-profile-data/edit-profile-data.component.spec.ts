import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { EditProfileDataComponent } from './edit-profile-data.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppTestModule } from '../../../../test/test.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('EditProfileDataComponent', () => {
  let component: EditProfileDataComponent;
  let fixture: ComponentFixture<EditProfileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileDataComponent ],
      imports: [AppTestModule, NgbModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
