import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { TopicService } from '../services/topic.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private userService: UserService, 
              private fb: FormBuilder, 
              private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) {}
  user$!: Observable<User>;
  fecha_actual = new Date()
  id_foro = this.route.snapshot.params["id"];
  get usuario(){
    return this.userService.usuario;
  }

  ok = ''

  topicForm: FormGroup = this.fb.group({
    titulo:  [ '', [ Validators.required] ],
    categoria:  [ '', [ Validators.required, Validators.maxLength(24)] ],
    cuerpo: [ '', [ Validators.required] ]
  })
  
  post() {
    const { titulo, categoria, cuerpo } = this.topicForm.value;
    if(this.topicForm.valid) {
      this.topicService.postTopic(this.id_foro, titulo, categoria, cuerpo, this.id_foro, this.usuario.id!).subscribe( resp => {
        if(resp.ok) {
          this.router.navigateByUrl('/topics/' + this.id_foro, {skipLocationChange: true})
        } else {
          console.log(resp.msg!)
          this.ok = resp.msg!
        }
      })
    } else {
      this.ok = 'Envío de formulario no válido, es posible que un campo este vacío.'
    }
  }


  ngOnInit(): void {
    this.userService.validarToken().subscribe(
      resp => {
        this.user$ = this.userService.getById(resp.uid!)
      }
    )
  }

}
