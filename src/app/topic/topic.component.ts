import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topics } from '../interfaces/topic.interface';
import { TopicService } from '../services/topic.service';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
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
