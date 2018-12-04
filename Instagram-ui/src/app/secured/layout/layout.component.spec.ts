import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestModule } from '../../../test/test.module';
import { LayoutComponent } from './layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { authService } from '../../service/auth.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let router: Router;
  let AuthService: authService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [RouterTestingModule, AppTestModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    AuthService = fixture.debugElement.injector.get(authService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
