import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from 'src/app/interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  getForums(categoria: number) {
    let lista = this.httpClient.get('http://localhost:3000/forums/' + categoria);
    let forums: Forum[] = []
    lista.subscribe((resp: any) => {
        lista.forEach(resp => {
          console.log(resp);
          
          forums.push()
        });        
      });
    
  }


}
