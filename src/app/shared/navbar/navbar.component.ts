import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
// de los componentes mas importantes de la aplicacion
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loginForm: FormGroup = this.fb.group({
    email:  ['pablojavierprietocepeda@gmail.com', [ Validators.required, Validators.email]],
    password: [ '', [ Validators.required, Validators.minLength(3)]]
  }) // form controller

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { } // importo servicios y routeservice

  get usuario(): User{
    return this.userService.usuario; // getter de userservice
  }

  login() { // accion login perpetrada por el boton submit del formulario
    const { email, password } =  this.loginForm.value
    this.userService.getSession(email, password)
      .subscribe(resp => {
        if( resp ) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            window.location.reload();
          });
        }
      })
  }

  logout() { // removemos token jwt del localstorage, por lo tanto desloguea al usuario y lo manda al inicio
    localStorage.removeItem('token')
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.userService.validarToken().subscribe( // validamos que este logueado
      resp => {
        console.log(resp)
      }
    )
  }
}
