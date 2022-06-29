import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { Forum } from 'src/app/interfaces/forum.interface';
import { Topic, Topics } from 'src/app/interfaces/topic.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ForumService } from 'src/app/services/forum.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = this.categoryService.getList(); // obtengo lista de categorias
  forums$!: Observable<Forum[]>;
  temas$!: Observable<Topic[]>;
  
  constructor(private categoryService: CategoryService,
               private forumService: ForumService,
               private topicService: TopicService) { // importo servicios
    this.temas$ = this.topicService.getAll() // obtengo todos los temas
    this.forums$ = this.forumService.getList(); // obtengo todos los foros
  }

}
