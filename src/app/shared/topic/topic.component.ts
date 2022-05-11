import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topics } from '../../interfaces/topic.interface';
import { TopicService } from '../../services/topic.service';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() id_tema: string = "3";
  constructor(private topicService: TopicService, 
              private route: ActivatedRoute) { }
  
  tema$!: Observable<Topics>;
  
  ngOnInit(): void {
    this.tema$ = this.topicService.getById(parseInt(this.id_tema));
  }

}
