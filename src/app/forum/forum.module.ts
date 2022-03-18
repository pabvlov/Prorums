import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ForumComponent } from './forum.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ForumComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ForumModule { }
