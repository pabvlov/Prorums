import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from  '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ToggleDirective } from './toggle.directive';
import { FulltopicModule } from './fulltopic/fulltopic.module';
import { UserModule } from './user/user.module';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    ToggleDirective,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IndexModule,
    HttpClientModule,
    CommonModule,
    FulltopicModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  exports: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
