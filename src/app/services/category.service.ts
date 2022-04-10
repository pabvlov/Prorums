import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
 
  getList(): Category[] {
    let categories: Category[] = [];
    let lista = this.httpClient.get('http://localhost:3000/categories');

    lista.subscribe((resp: any) => {
      for (let index = 0; index < resp.length; index++) {
        let category: Category = {
          id:                 resp[index].id,
          name:               resp[index].name,
          description:        resp[index].description,
          position:           resp[index].position
        };
        categories.push(category);
      }
    });
    return categories;
  }

}
