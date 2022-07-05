import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProrumsResponse } from '../interfaces/response.interface';
import { Thread } from '../interfaces/thread.interface';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private httpClient: HttpClient) { } // importo servicios fetch

  getByForum(id: number): Observable<Thread[]> {
    return this.httpClient.get<Thread[]>(`http://localhost:3000/threads/${id}`)
  } // mapeo automatico mediante fetch

  postTopic(cuerpo: string, id_usuario: number, id_tema: number) {
    const url = 'http://localhost:3000/post/thread';
    const body = { cuerpo, id_usuario, id_tema } // objeto body conformado por los entry paramenters
    return this.httpClient.post<ProrumsResponse>(url, body) // respuesta ok y msg que devuelve el post al ejecutarse
  } // todo: cambiar
}
