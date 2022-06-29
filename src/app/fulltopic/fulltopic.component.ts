import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic, Topics } from '../interfaces/topic.interface';
import { User } from '../interfaces/user.interface';
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
    private userService: UserService) { } // importo servicios y routeservice

  id_tema = this.route.snapshot.params["id"]; // saco el id del url
  topic$: Observable<Topic> = this.topicService.getById2(parseInt(this.id_tema)); // llamo a obtener mediante id del servicio de temas
  get usuario(): User{
    return this.userService.usuario; // getter de userservice
  }
  ngOnInit(): void {
    
  }

}
