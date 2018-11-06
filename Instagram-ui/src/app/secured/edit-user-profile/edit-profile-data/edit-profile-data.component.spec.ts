import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileDataComponent } from './edit-profile-data.component';

describe('EditProfileDataComponent', () => {
  let component: EditProfileDataComponent;
  let fixture: ComponentFixture<EditProfileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileDataComponent ]
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
