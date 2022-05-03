import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topics } from 'src/app/interfaces/topic.interface';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-shorttopics',
  templateUrl: './shorttopics.component.html',
  styleUrls: ['./shorttopics.component.css']
})
export class ShorttopicsComponent {
  @Input() id_tema: number = 3;
  constructor(private topicService: TopicService, 
              private route: ActivatedRoute) { }
  tema!: Topics;
  ngOnInit(): void {
    this.topicService.getById(this.id_tema).subscribe((data: Topics) => {
      this.tema = data;
    });
  }
}
