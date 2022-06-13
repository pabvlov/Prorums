import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  registerForm: FormGroup = this.fb.group({
    email:  ['pablojavierprietocepeda@gmail.com', [ Validators.required, Validators.email]],
    name: [ '', [Validators.required] ],
    nickname: [ '', [Validators.required] ],
    password: [ '', [ Validators.required, Validators.minLength(3)] ],
    confirmPassword: [ '', [Validators.required, Validators.minLength(3)] ]
  })
  ok = {
    msj: '',
    color: 'white'
  };
  register() {
    const { email, name, nickname, password, confirmPassword } =  this.registerForm.value
    console.log(name, nickname);
    
    if(password === confirmPassword) {
      console.log(password, confirmPassword)
      this.userService.register(email, name, nickname, password)
      .subscribe(resp => {
        console.log(resp)
        if(resp.ok) {
          this.ok = {
            msj: 'Cuenta creada con éxito',
            color: 'green'
          }
        } else this.ok = {
          msj: resp.resp!,
          color: 'red'
        }
      })
    } else this.ok = {
        msj: 'Las contraseñas no coinciden.',
        color: 'red'
    }
    
  }

  ngOnInit(): void {
  }

}
