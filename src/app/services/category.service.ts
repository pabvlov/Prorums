import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Forum } from '../interfaces/forum.interface';

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
        let forums: Forum[] = this.getForumsFromCategories(index);
        let category: Category = {
          id:                 resp[index].id,
          name:               resp[index].name,
          description:        resp[index].description,
          position:           resp[index].position,
          forums:             forums
        };
        categories.push(category);
      }
    });
    return categories;
  }
  getForumsFromCategories(id: number): Forum[] {
    let foros = this.httpClient.get(`http://localhost:3000/categories/${id}/forums`)
    let forumsArray: Forum[] = []
    let forums = foros.subscribe((resp2: any) =>{
      
      for (let index = 0; index < resp2.length; index++) {
        let foro: Forum = {
          id:                   resp2[index].id,
          name:                 resp2[index].name,
          description:          resp2[index].description,
          picture:              resp2[index].picture,
          position:             resp2[index].position,
          id_category_fk:       resp2[index].id_category_fk
        }
        if(foro.id_category_fk === id+1) { forumsArray.push(foro); }
        
      }
    })
    return forumsArray;
  }
}
