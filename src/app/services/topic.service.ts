import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Forum } from '../interfaces/forum.interface';
import { Topic, Topics } from '../interfaces/topic.interface';
import { User } from '../interfaces/user.interface';
import { ForumService } from './forum.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(  private httpClient: HttpClient, 
                private forumService: ForumService,
                private userService: UserService) { }



  getTopics(forum: number) {
    let lista = this.httpClient.get('http://localhost:3000/topics/' + forum);
    let topics: Topics[] = []
    lista.subscribe((resp: any) => {   
      for (let i = 0; i < resp.length; i++) {
        let topic: Topics = {
          id:       resp[i].id,
          titulo:   resp[i].titulo,
          fecha:    new Date(resp[i].fecha),
          tipo:     resp[i].tipo, 
          id_foro_fk: resp[i].id_foro_fk,
          nombre_foro: resp[i].nombre_foro,
          descripcion_foro: resp[i].descripcion_foro,
          foto:     resp[i].foto,
          id_usuario_fk: resp[i].id_usuario_fk,
          escritor: resp[i].escritor,
          apodo_escritor: resp[i].apodo_escritor
        }         
        topics.push(topic); 
      }
    });
    return topics;
  }

  getById(id: number): Observable<Topics> {
    return this.httpClient.get<Topics[]>(`http://localhost:3000/topic/${id}`)
    .pipe(map((response: Topics[]) => response[0]));
  }
}
