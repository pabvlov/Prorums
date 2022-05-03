import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from  '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './shared/topic/topic.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ToggleDirective } from './toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    ToggleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IndexModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
