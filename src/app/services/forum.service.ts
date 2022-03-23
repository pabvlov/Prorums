import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  getForum(id: number) {
    let lista = this.httpClient.get('http://localhost:3000/forums/' + id);
    let forum: Forum = 
    lista.subscribe((resp: any) => {
      forum = {
        id:                 resp[0].id,
        name:               resp[0].name,
        description:        resp[0].description,
        picture:            resp[0].picture,
        position:           resp[0].position,
        id_category_fk:     resp[0].id_category_fk
      };
    });
    return forum;
  }


}
