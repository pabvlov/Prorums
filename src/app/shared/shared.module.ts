import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { TopicComponent } from './topic/topic.component';
import { ShorttopicsComponent } from './shorttopics/shorttopics.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent,
    TopicComponent,
    ShorttopicsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent,
    TopicComponent,
    ShorttopicsComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
