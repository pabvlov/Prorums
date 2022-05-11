import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Forum } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  constructor(private forumService: ForumService) { 
  }
  @Input() id_foro: string = "3";

  nombre: string = '';
  desc: string = '';
  foro$!: Observable<Forum>;

  ngOnInit(): void {
    
    this.foro$ = this.forumService.getById(parseInt(this.id_foro));
  }

}
