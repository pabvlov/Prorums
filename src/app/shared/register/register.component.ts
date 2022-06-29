import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private router: Router) { } // importo servicios y routeservice

  registerForm: FormGroup = this.fb.group({
    email:  ['pablojavierprietocepeda@gmail.com', [ Validators.required, Validators.email]],
    name: [ '', [Validators.required] ],
    nickname: [ '', [Validators.required] ],
    password: [ '', [ Validators.required, Validators.minLength(3)] ],
    confirmPassword: [ '', [Validators.required, Validators.minLength(3)] ]
  }) // form controller
  ok = {
    msj: '',
    color: 'white'
  };
  register() { // registramos al usuario
    const { email, name, nickname, password, confirmPassword } =  this.registerForm.value // object destructuring del form controller
    console.log(name, nickname);
    
    if(password === confirmPassword) { // ejecutese si la password esta confirmada
      this.userService.register(email, name, nickname, password)
      .subscribe(resp => {
        console.log(resp)
        if(resp.ok) {
          this.ok = {
            msj: 'Cuenta creada con éxito',
            color: 'green'
          }
          delay(2000);
          this.userService.getSession(email, password)
          .subscribe(resp => {
            if( resp ) {
              this.router.navigateByUrl('/', {skipLocationChange: true});
            }
          })
        } else this.ok = {
          msj: resp.resp!,
          color: 'red'
        }
      })
    } else this.ok = { // caso contrario, manda mensaje de error
        msj: 'Las contraseñas no coinciden.',
        color: 'red'
    }
    
  }

  ngOnInit(): void {
    this.userService.validarToken().subscribe( // valida si esta logueado, si ya esta logueado nos saca del register
      resp => {
        if(resp.ok) {
          this.router.navigateByUrl('#', {skipLocationChange: true})
        }
      }
    )
  }

}
