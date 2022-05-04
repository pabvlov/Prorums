import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic, Topics } from '../interfaces/topic.interface';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-fulltopic',
  templateUrl: './fulltopic.component.html',
  styleUrls: ['./fulltopic.component.css']
})
export class FulltopicComponent implements OnInit {

  constructor(private topicService: TopicService, private route: ActivatedRoute) { }
  id_tema = this.route.snapshot.params["id"];
  topic!: Topic;
  ngOnInit(): void {
    this.topicService.getById2(parseInt(this.id_tema)).subscribe((data: Topic) => {
      this.topic = data;
      this.topic.fecha = data.fecha;
      this.topic.id_usuario_fk = data.id_usuario_fk;
    })
  }

}
