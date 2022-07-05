import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProrumsResponse } from '../interfaces/response.interface';
import { Topic, Topics } from '../interfaces/topic.interface';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient: HttpClient) { } // importo servicios fetch

  getAll(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(`http://localhost:3000/topics`)
  } // mapeo automatico mediante fetch

  getByUser(user: number) {
    let lista = this.httpClient.get('http://localhost:3000/user/' + user + '/topics'); // fetch get para obtener los temas de un usuario x
    let topics: Topics[] = []
    lista.subscribe((resp: any) => {   
      for (let i = 0; i < resp.length; i++) {
        let topic: Topics = {
          id:       resp[i].id,
          titulo:   resp[i].titulo,
          fecha:    resp[i].fecha,
          tipo:     resp[i].tipo, 
          id_foro_fk: resp[i].id_foro_fk,
          nombre_foro: resp[i].nombre_foro,
          descripcion_foro: resp[i].descripcion_foro,
          foto:     resp[i].foto,
          id_usuario_fk: resp[i].id_usuario_fk,
          escritor: resp[i].escritor,
          apodo_escritor: resp[i].apodo_escritor,
          borrado: resp[i].borrado
        } // mapeo los temas         
        topics.push(topic);  // los paso a la lista
      } 
    });
    return topics; // retorno la lista de temas
  }

  getTopics(forum: number): Observable<Topics[]> {
    return this.httpClient.get<Topics[]>(`http://localhost:3000/topics/${forum}`) // fetch get mapeo automatico de lista de temas de un foro
  }

  getById(id: number): Observable<Topics> {
    return this.httpClient.get<Topics[]>(`http://localhost:3000/topic/${id}`) // fetch get mapeo automatico de tema por id
    .pipe(map((response: Topics[]) => response[0]));
  }

  getById2(id: number): Observable<Topic> {
    return this.httpClient.get<Topic[]>(`http://localhost:3000/topic/${id}`) // fetch get mapeo automatico de tema por id con otro tipo de interfaz que pasa mas info desde el backend
    .pipe(map((response: Topic[]) => response[0]));
  }

  postTopic(foro: number, titulo: string, categoria: string, cuerpo: string, id_foro: number, id_usuario: number) {
    const url = 'http://localhost:3000/post/';
    const body = { foro, titulo, categoria, cuerpo, id_foro, id_usuario } // objeto body conformado por los entry paramenters
    return this.httpClient.post<ProrumsResponse>(url, body) // respuesta ok y msg que devuelve el post al ejecutarse
  }

  borrar(id: number) {
    return this.httpClient.post<ProrumsResponse>(`http://localhost:3000/post/hide`, { id });
  }

  mostrar(id: number) {
    return this.httpClient.post<ProrumsResponse>(`http://localhost:3000/post/show`, { id });
  }
}
