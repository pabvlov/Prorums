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
    let lista = this.httpClient.get('http://localhost:3000/categories'); // llama al backend para obtener categorias

    lista.subscribe((resp: any) => {
      for (let index = 0; index < resp.length; index++) {
        let category: Category = {
          id:                 resp[index].id,
          name:               resp[index].nombre,
          description:        resp[index].descripcion,
          position:           resp[index].posicion
        }; // mapeo del objeto categoria
        categories.push(category); // agrego objeto a la lista de categorias
      }
    });
    return categories; // retorno lista de categorias
  }

}
