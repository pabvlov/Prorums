import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Convert, Forum } from 'src/app/interfaces/forum.interface';

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
          name:         resp[i].name,
          description:  resp[i].description,
          picture:      resp[i].picture,
          position:     resp[i].position,
          id_category_fk: resp[i].id_category_fk   

        } 
        forums.push(forum); 
      }
    });
    return forums;
  }

  getList() {
    let lista = this.httpClient.get('http://localhost:3000/forums');
    let forums: Forum[] = []
    lista.subscribe((resp: any) => {         
      for (let i = 0; i < resp.length; i++) {
        let forum: Forum = {
          id:           resp[i].id,
          name:         resp[i].name,
          description:  resp[i].description,
          picture:      resp[i].picture,
          position:     resp[i].position,
          id_category_fk: resp[i].id_category_fk   

        } 
        forums.push(forum);
      }
    });
    return forums;
  }

  getById(id: number): Observable<Forum[]> {
    return this.httpClient.get<Forum[]>('http://localhost:3000/forums/' + id)
    .pipe(map((response: Forum[]) => response));
  }


}
