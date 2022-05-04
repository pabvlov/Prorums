import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ForumModule { }
