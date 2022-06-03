import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loginForm: FormGroup = this.fb.group({
    email:  ['pablojavierprietocepeda@gmail.com', [ Validators.required, Validators.email]],
    password: [ '', [ Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  get usuario(){
    return this.userService.usuario;
  }

  login() {
    
    const { email, password } =  this.loginForm.value
    this.userService.getSession(email, password)
      .subscribe(resp => {
        if( resp ) {
          console.log(resp, 'uwu')
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            window.location.reload();
          });
        }
      })
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.userService.validarToken().subscribe(
      resp => {
        console.log(resp)
      }
    )
  }
}
