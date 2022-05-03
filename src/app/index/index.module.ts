import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CategoryComponent,
    IndexComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class IndexModule { }
