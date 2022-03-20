import { Injectable } from '@angular/core';
import { Forum } from '../interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForosService {

  constructor() { }

  private _foros: Forum[] = [
    {id = 1, name = "Foro 1", description = "En este foro encontraras todo lo que necesitas.", picture = "../../src/assets/img/no-user-image-icon.jpg", position = 1},

  ]

  getForos() {
    return [ ...this._foros ]
  }


}
