import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProrumsResponse } from '../interfaces/response.interface';
import { Session } from '../interfaces/session.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private _usuario: User = {
    nombre: '',
    id: 0,
  };
 
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

  getByIdNotObserver(id: number) {
    return this.httpClient.get<User>('http://localhost:3000/user/' + id)
      .pipe(
        map( resp => {
          this._usuario = {
            id: resp.id,
            nombre: resp.nombre,
            apodo: resp.apodo,
            correo: resp.correo,
            firma: resp.firma,
            ubicacion: resp.ubicacion,
            foto: resp.ubicacion,
            fecha_registro: resp.fecha_registro,
            ultima_visita: resp.ultima_visita,
            pais: resp.pais,
          }
        })
      )
  }

  get usuario(): User {
    return { ...this._usuario } 
  }

  getSession(mail: string, password: string) {
    const url = `http://localhost:3000/auth/login`
    const body = { mail, password }
    return this.httpClient.post<Session>(url, body)
      .pipe(
        tap( resp => {
          if( resp.ok ) {
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              id: resp.uid!,
              nombre: resp.nombre!,
              foto: resp.foto!
            }
          }
        } ),
        map( resp => resp.ok )
      )
  }

  register(mail: string, name: string, nickname: string, password: string) {
    const url = `http://localhost:3000/auth/register`
    const body = { mail, name, nickname, password, ubicacion: '' }
    return this.httpClient.post<ProrumsResponse>(url, body)
  }

  validarToken() {
    const url = 'http://localhost:3000/auth/renew'
    const body = { token: localStorage.getItem('token') }

    return this.httpClient.post<Session>(url, body)
      .pipe(
        tap( resp => {
            this._usuario = {
              id: resp.uid || 0,
              nombre: resp.nombre!,
              foto: resp.foto!
            }
        })
      )

  }
  
}

