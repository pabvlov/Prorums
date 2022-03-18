import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  },
  {
    path: 'profile',
  },
  {
    path: 'forum'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
