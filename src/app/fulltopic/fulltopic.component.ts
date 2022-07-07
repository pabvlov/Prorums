import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Thread } from '../interfaces/thread.interface';
import { Topic, Topics } from '../interfaces/topic.interface';
import { ThreadService } from '../services/thread.service';
import { TopicService } from '../services/topic.service';
import { UserService } from '../services/user.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-fulltopic',
  templateUrl: './fulltopic.component.html',
  styleUrls: ['./fulltopic.component.css']
})
export class FulltopicComponent implements OnInit {

  constructor(private topicService: TopicService, 
    private route: ActivatedRoute,
    private userService: UserService,
    private threadService: ThreadService,
    private fb: FormBuilder,
    private router: Router) {
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
      );
    } // importo servicios y routeservice

  get usuario () {
    return this.userService.usuario;
  }

  postThread: FormGroup = this.fb.group({
    cuerpo:  [ '', [ Validators.required] ],
  }) // form controller

  id_tema = this.route.snapshot.params["id"]; // saco el id del url
  topic$: Observable<Topic> = this.topicService.getById2(parseInt(this.id_tema)); // llamo a obtener mediante id del servicio de temas
  threads$: Observable<Thread[]> = this.threadService.getByForum(parseInt(this.id_tema)); // llamo a obtener mediante id del servicio de temas

  post() {
    const { cuerpo } = this.postThread.value;
    const body = { cuerpo }
    this.threadService.postTopic(cuerpo, this.usuario.id!, this.id_tema)
      .subscribe( resp => {
        if(resp.ok) window.location.reload();
      } );
  }
  borrar() {
    this.topicService.borrar(this.id_tema).subscribe( resp => { if(resp.ok) window.location.reload(); });
  }

  mostraruwu() {
    this.topicService.mostrar(this.id_tema).subscribe( resp => { if(resp.ok) window.location.reload(); });
  }

  editar() {
    this.router.navigateByUrl('/edit/' + this.id_tema, {skipLocationChange: true});
  }

  ngOnInit(): void {
    console.log(this.threads$);
    
  }



  //material
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  reacciones: string[] = ['😂'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.reacciones.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.reacciones.indexOf(fruit);

    if (index >= 0) {
      this.reacciones.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.reacciones.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}

// wtf
export interface Fruit {
  name: string;
}
