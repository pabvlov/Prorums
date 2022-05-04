import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topics } from '../interfaces/topic.interface';
import { User } from '../interfaces/user.interface';
import { TopicService } from '../services/topic.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private topicService: TopicService) { }
  id_user = this.route.snapshot.params["id"];
  user!: User;
  ngOnInit(): void {
    this.userService.getById(parseInt(this.id_user)).subscribe((data: User) => {
      this.user = data;
    })
  }
  
  temas: Topics[] = this.topicService.getByUser(parseInt(this.id_user));   ;

}
