import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Convert, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
 
  getList():Array<User> {
    let users: User[] = [];
    let lista = this.httpClient.get('http://localhost:3000/users');

    lista.subscribe((resp: any) => {

      for (let index = 0; index < resp.length; index++) {
        let user: User = {
          id:                 resp[index].id,
          nombre:               resp[index].nombre,
          apodo:           resp[index].apodo,
          correo:               resp[index].correo,
          password:           resp[index].password,
          firma:               resp[index].firma,
          ubicacion:           resp[index].ubicacion,
          foto:            resp[index].foto,
          fecha_registro:  resp[index].fecha_registro,
          ultima_visita:         resp[index].ultima_visita,
          pais:             resp[index].pais,
        };
        users.push(user);
      }
    });
    return users;
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User[]>('http://localhost:3000/user/' + id)
    .pipe(map((response: User[]) => response[0]));
  }
  
}