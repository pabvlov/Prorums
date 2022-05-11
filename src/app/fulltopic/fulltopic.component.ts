import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  topic$: Observable<Topic> = this.topicService.getById2(parseInt(this.id_tema));
  ngOnInit(): void {
    
  }

}
