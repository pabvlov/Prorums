import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Forum } from '../interfaces/forum.interface';
import { Topics } from '../interfaces/topic.interface';
import { ForumService } from '../services/forum.service';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  id_foro: number = this.route.snapshot.params["id"];;
  constructor(private topicService: TopicService, private route: ActivatedRoute, private forumService: ForumService) { 

  }

  foro$: Observable<Forum> = this.forumService.getById(this.id_foro);
  temas$: Observable<Topics[]> = this.topicService.getTopics(this.id_foro);

  ngOnInit(): void {
    
  }
}
