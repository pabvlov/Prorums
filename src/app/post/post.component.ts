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
              private router: Router) {} // importo servicios y routeservice
  user$!: Observable<User>;
  fecha_actual = new Date()
  id_foro = this.route.snapshot.params["id"]; // obtengo el id desde la url
  get usuario(){
    return this.userService.usuario; // getter de usuario de userService
  }

  ok = ''

  topicForm: FormGroup = this.fb.group({
    titulo:  [ '', [ Validators.required] ],
    categoria:  [ '', [ Validators.required, Validators.maxLength(20)] ],
    cuerpo: [ '', [ Validators.required] ]
  }) // form controller
  
  post() { // se acciona al presionar el boton de publicar
    const { titulo, categoria, cuerpo } = this.topicForm.value; // object destructuring del form controller
    if(this.topicForm.valid) { // si es valido:
      this.topicService.postTopic(this.id_foro, titulo, categoria, cuerpo, this.id_foro, this.usuario.id!).subscribe( resp => {
        if(resp.ok) {
          this.router.navigateByUrl('/topics/' + this.id_foro, {skipLocationChange: true})
        } else {
          console.log(resp.resp!)
          this.ok = resp.resp!
        }
      })
    } else { // si no es valido:
      this.ok = 'Envío de formulario no válido, la categoría debe tener máximo 20 caracteres, el título y el cuerpo no deben estar vacíos.'
    }
  }


  ngOnInit(): void {
    this.userService.validarToken().subscribe(
      resp => {
        this.user$ = this.userService.getById(resp.uid!)
        if(!resp.ok) { // si el usuario no esta logueado, que lo devuelva a la pagina de listado de topicos, ya que los usuarios no logueados no pueden publicar
          this.router.navigateByUrl('/topics/' + this.id_foro, {skipLocationChange: true})
        }
      }
    )
  }

}
