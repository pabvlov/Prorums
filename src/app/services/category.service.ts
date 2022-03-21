import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Forum } from '../interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
 
  getList():Array<Category> {
    let categories: Category[] = [];
    let lista = this.httpClient.get('http://localhost:3000/categories');

    lista.subscribe((resp: any) => {
      let forumsArray: Forum[] = []
      for (let index = 0; index < resp.length; index++) {
        let foros = this.httpClient.get(`http://localhost:3000/categories/${index}/forums`)
        let forums = foros.subscribe((resp2: any) =>{
          for (let index = 0; index < resp2.length; index++) {
            let foro: Forum = {
              id:           resp2[index].id,
              name:         resp2[index].name,
              description:  resp2[index].description,
              picture:      resp2[index].picture,
              position:     resp2[index].position
            }
            forumsArray.push(foro);
          }
        })
        let category: Category = {
          id:                 resp[index].id,
          name:               resp[index].name,
          description:        resp[index].description,
          position:           resp[index].position,
          forums:             forumsArray
        };
        categories.push(category);
      }
    });
    return categories;
  }
}
