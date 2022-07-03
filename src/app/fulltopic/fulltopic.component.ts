import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread.interface';
import { Topic, Topics } from '../interfaces/topic.interface';
import { ThreadService } from '../services/thread.service';
import { TopicService } from '../services/topic.service';
import { UserService } from '../services/user.service';

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
    private fb: FormBuilder) { } // importo servicios y routeservice
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
    console.log("accedi");
  }

  ngOnInit(): void {
    console.log(this.threads$);
    
  }

}
