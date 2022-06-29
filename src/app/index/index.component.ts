import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { CategoryService } from '../services/category.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categories: Category[] = this.categoryService.getList(); // obtengo lista de categorias
  
  constructor(private userService: UserService, private categoryService: CategoryService) {
    
  } // importo servicios

  ngOnInit(): void {
  }

}
