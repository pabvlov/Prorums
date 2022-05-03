import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Forum } from 'src/app/interfaces/forum.interface';
import { Topics } from 'src/app/interfaces/topic.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ForumService } from 'src/app/services/forum.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = this.categoryService.getList();
  forums: Forum[] = this.forumService.getList();
  temas: Topics[] = this.topicService.getAll();
  
  constructor(private categoryService: CategoryService,
               private forumService: ForumService,
               private topicService: TopicService) {
    
  }

}
