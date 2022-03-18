import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ForumComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
