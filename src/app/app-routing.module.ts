import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulltopicComponent } from './fulltopic/fulltopic.component';
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './shared/register/register.component';
import { TopicsComponent } from './topics/topics.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ // redirecciones / rutas url
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: IndexComponent
  },
  {
    path: 'forum',
    component: TopicsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'topics/:id',
    component: TopicsComponent
  },
  {
    path: 'topic/:id',
    component: FulltopicComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
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
