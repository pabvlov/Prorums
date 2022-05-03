import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Input() id_foro: string = "3";
  constructor(private topicService: TopicService, private route: ActivatedRoute, private forumService: ForumService) { }

  foro!: Forum;
  
  temas!: Topics[];

  ngOnInit(): void {
    this.id_foro = this.route.snapshot.params["id"];
    this.forumService.getById(parseInt(this.id_foro)).subscribe((data: Forum) => {
      this.foro = data;
    })
    this.temas = this.topicService.getTopics(parseInt(this.id_foro));    
  }
}
