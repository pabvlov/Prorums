import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User[] = this.userService.getList();
  errorMessage="";
  
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
  }

}
