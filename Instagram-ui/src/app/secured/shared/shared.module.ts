import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProfileService]
})
export class SharedModule { }
