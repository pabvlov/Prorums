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
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent,
    TopicComponent,
    ShorttopicsComponent,
    FooterComponent,
    RegisterComponent,
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
