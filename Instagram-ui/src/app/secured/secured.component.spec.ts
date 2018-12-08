import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredComponent } from './secured.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppTestModule } from '../../test/test.module';

describe('SecuredComponent', () => {
  let component: SecuredComponent;
  let fixture: ComponentFixture<SecuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredComponent ],
      imports: [AppTestModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
