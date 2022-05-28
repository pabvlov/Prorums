import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenGenerator } from 'ts-token-generator';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loginForm: FormGroup = this.fb.group({
    email:  ['', [ Validators.required, Validators.email]],
    password: [ '', [ Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  login() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    
  }
}
