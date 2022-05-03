import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ChangelogComponent,
    AdvertisementsComponent
  ]
})
export class SharedModule { }
