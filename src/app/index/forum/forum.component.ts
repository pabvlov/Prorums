import { Component, Input, OnInit, Output } from '@angular/core';
import { Forum } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  @Input() id:number = 3

  @Output() forum: Forum = this.forumService.getForum(this.id);
  
  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    console.log(this.forum);
    
  }

}
