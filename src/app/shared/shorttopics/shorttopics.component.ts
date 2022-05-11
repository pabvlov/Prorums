import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topics } from 'src/app/interfaces/topic.interface';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-shorttopics',
  templateUrl: './shorttopics.component.html',
  styleUrls: ['./shorttopics.component.css']
})
export class ShorttopicsComponent {
  @Input('id_tema') id_tema: string = "2";
  constructor(private topicService: TopicService, 
              private route: ActivatedRoute) { 
                
              }
  tema$!: Observable<Topics>;
  ngOnInit(): void {
    this.tema$ = this.topicService.getById(parseInt(this.id_tema));
  }
}
