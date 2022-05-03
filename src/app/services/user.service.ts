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
          name:               resp[index].name,
          nickname:           resp[index].nickname,
          mail:               resp[index].mail,
          password:           resp[index].password,
          sign:               resp[index].sign,
          location:           resp[index].location,
          picture:            resp[index].picture,
          registration_date:  resp[index].registration_date,
          last_visit:         resp[index].last_visit,
          id_language_fk:     resp[index].id_language_fk,
          id_role_fk:         resp[index].id_role_fk,
          id_country_fk:      resp[index].id_country_fk,
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