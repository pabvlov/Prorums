import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CategoryComponent,
    IndexComponent,
    ChangelogComponent,
    AdvertisementsComponent,
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
