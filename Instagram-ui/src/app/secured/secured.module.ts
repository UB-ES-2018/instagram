import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredComponent } from './secured.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { SecuredRoutingModule } from './secured-routing.module';

const components = [SecuredComponent, LayoutComponent, ProfileComponent];

@NgModule({
  imports: [
    CommonModule,
    SecuredRoutingModule
  ],
  declarations: [components],
  exports: [components]
})
export class SecuredModule { }
