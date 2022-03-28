import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Forum } from 'src/app/interfaces/forum.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = this.categoryService.getList();
  forums: Forum[] = this.forumService.getList();
  
  constructor(private categoryService: CategoryService, private forumService: ForumService) {
    
  }

  ngOnInit(): void {
    console.log(this.forumService.getForums(3));
  }

}
