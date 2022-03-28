import { Component, Input, OnInit } from '@angular/core';
import { Forum } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  @Input() id_foro: number = 3;

  nombre: string = '';
  desc: string = ''

  foro!: Forum;
  
  
  constructor(private forumService: ForumService) { }

    

  ngOnInit(): void {
    this.forumService.getById(this.id_foro).subscribe((data: Forum[]) => {
      this.nombre = data[0].name;
      this.desc = data[0].description;
      
      this.foro = data[0];
    });
  }

}
