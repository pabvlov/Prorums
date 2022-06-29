import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Forum } from 'src/app/interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { } // importo servicios de fetch

  getForums(categoria: number) {
    let lista = this.httpClient.get('http://localhost:3000/forums/' + categoria); // get fetch al backend para obtener lista de foros de la categoria
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

        } // mapeo foros
        forums.push(forum); // agrego objeto foro a lista de foros
      }
    });
    return forums; // retorno lista de foros
  }

  getList(): Observable<Forum[]> {
    return this.httpClient.get<Forum[]>(`http://localhost:3000/forums`);
  } // mapeo automatico de lista mediante fetch

  getById(id: number): Observable<Forum> {
    return this.httpClient.get<Forum[]>(`http://localhost:3000/forum/${id}`)
    .pipe(map((response: Forum[]) => response[0]));
  } // mapeo automatico de objeto mediante fetch


}
