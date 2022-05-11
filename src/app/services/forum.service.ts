import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Forum } from 'src/app/interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  getForums(categoria: number) {
    let lista = this.httpClient.get('http://localhost:3000/forums/' + categoria);
    let forums: Forum[] = []
    lista.subscribe((resp: any) => {   
      for (let i = 0; i < resp.length; i++) {
        let forum: Forum = {
          id:           resp[i].id,
          nombre:         resp[i].nombre,
          descripcion:  resp[i].descripcion,
          foto:      resp[i].foto,
          posicion:     resp[i].posicion,
          id_categoria_fk: resp[i].id_categoria_fk   

        } 
        forums.push(forum); 
      }
    });
    return forums;
  }

  /* getList() {
    let lista = this.httpClient.get('http://localhost:3000/forums');
    let forums: Forum[] = []
    lista.subscribe((resp: any) => {         
      for (let i = 0; i < resp.length; i++) {
        let forum: Forum = {
          id:           resp[i].id,
          nombre:         resp[i].nombre,
          descripcion:  resp[i].descripcion,
          foto:      resp[i].foto,
          posicion:     resp[i].posicion,
          id_categoria_fk: resp[i].id_categoria_fk
        } 
        forums.push(forum);
      }
    });
    return forums;
  } */

  getList(): Observable<Forum[]> {
    return this.httpClient.get<Forum[]>(`http://localhost:3000/forums`);
  }

  getById(id: number): Observable<Forum> {
    return this.httpClient.get<Forum[]>(`http://localhost:3000/forum/${id}`)
    .pipe(map((response: Forum[]) => response[0]));
  }


}
