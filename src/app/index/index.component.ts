import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { User } from '../interfaces/user.interface';
import { CategoryService } from '../services/category.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //users: User[] = this.userService.getList();
  categories: Category[] = this.categoryService.getList();
  
  constructor(private userService: UserService, private categoryService: CategoryService) {
    
  }

  ngOnInit(): void {
  }

}
