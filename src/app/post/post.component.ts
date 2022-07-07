import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread.interface';
import { Topic } from '../interfaces/topic.interface';
import { User } from '../interfaces/user.interface';
import { ThreadService } from '../services/thread.service';
import { TopicService } from '../services/topic.service';
import { UserService } from '../services/user.service';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  tipo = 0;
  ok = ''
  id_tema = this.route.snapshot.params["id"]; // saco el id del url

  constructor(private userService: UserService, 
              private fb: FormBuilder, 
              private route: ActivatedRoute,
              private topicService: TopicService,
              private threadService: ThreadService,
              private router: Router) {} // importo servicios y routeservice
              fecha_actual = new Date()
              id_foro = this.route.snapshot.params["id"]; // obtengo el id desde la url
  get usuario(){
    return this.userService.usuario; // getter de usuario de userService
  }
              
  topicForm: FormGroup = this.fb.group({
    titulo:  [ '', [ Validators.required] ],
    categoria:  [ '', [ Validators.required, Validators.maxLength(20)] ],
    cuerpo: [ '', [ Validators.required] ]
  }) // form controller
  user$!: Observable<User>;
  
  topic$: Observable<Topic> = this.topicService.getById2(parseInt(this.id_tema)); // llamo a obtener mediante id del servicio de temas
  threads$: Observable<Thread[]> = this.threadService.getByForum(parseInt(this.id_tema)); // llamo a obtener mediante id del servicio de temas
              
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

  edit() {
    const { titulo, categoria, cuerpo } = this.topicForm.value; // object destructuring del form controller
    if(this.topicForm.valid) { // si es valido:
      this.topicService.editTopic(this.id_tema, titulo, categoria, cuerpo).subscribe( resp => {
        if(resp.ok) {
          this.router.navigateByUrl('/topic/' + this.id_tema, {skipLocationChange: true}).then(() => {
            window.location.reload();
          })
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
    this.route.url.subscribe( resp => { 
      this.tipo = (resp[0].path == 'post') ? 1 : 0;
    });
    console.log(this.route.params);
    const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
      return new MDCRipple(el);
    });
    
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
