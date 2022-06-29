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

  constructor(private httpClient: HttpClient) { } // importacion de servicios

  private _usuario: User = {
    nombre: '',
    id: 0,
  }; // objeto usuario para uso exclusivo de este .ts
 
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
        }; // mapeo usuario
        users.push(user); // paso usuario a la lista de usuarios
      }
    });
    return users; // retorno usuarios
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User[]>('http://localhost:3000/user/' + id)
    .pipe(map((response: User[]) => response[0])); // mapeo automatico de lista de usuarios
  }

  getByIdNotObserver(id: number) { // mapeo de usuario por id no observable
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
    return { ...this._usuario } // getter usuario de userService
  }

  getSession(mail: string, password: string) { // loguear al usuario
    const url = `http://localhost:3000/auth/login`
    const body = { mail, password }
    return this.httpClient.post<Session>(url, body)
      .pipe(
        tap( resp => {
          if( resp.ok ) {
            localStorage.setItem('token', resp.token!) // guardamos el jwt en localstorage
            this._usuario = {
              id: resp.uid!,
              nombre: resp.nombre!,
              foto: resp.foto!
            } // le asignamos al usuario la response
          }
        } ),
        map( resp => resp.ok )
      )
  }

  register(mail: string, name: string, nickname: string, password: string) {
    const url = `http://localhost:3000/auth/register`
    const body = { mail, name, nickname, password, ubicacion: '' }
    return this.httpClient.post<ProrumsResponse>(url, body) // registramos al usuario via post, devuelve una response
  }

  validarToken() { // revisamos token jwt del localstorage y verificamos que este logueado o no.
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

