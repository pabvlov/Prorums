import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { TopicComponent } from './topic/topic.component';
import { ShorttopicsComponent } from './shorttopics/shorttopics.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent,
    TopicComponent,
    ShorttopicsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent,
    TopicComponent,
    ShorttopicsComponent
  ]
})
export class SharedModule { }
