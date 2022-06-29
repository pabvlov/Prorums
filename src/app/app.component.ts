import { Component, ElementRef, HostBinding, HostListener, OnInit, Pipe, ViewChild } from '@angular/core';
import { ToggleDirective } from './toggle.directive';
// dark theme fallido por falta de tiempo
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Prorums';
  darktheme = localStorage.getItem('dark');
  ngOnInit(): void {
    if(this.darktheme === null) {
      localStorage.setItem('dark', "1");
      document.body.classList.add('dark-theme'); 
    }
    if(this.darktheme === "1") {
      document.body.classList.add('dark-theme');
    }
    else {
      document.body.classList.remove('dark-theme'); 
    }
    
  }

  dark() {
    let body = document.body;
    if(this.darktheme === "1") {
      localStorage.setItem('dark', "1");
      body.classList.add('dark-theme');
    }
    else {
      localStorage.setItem('dark', "0");
      body.classList.remove('dark-theme'); 
    }
      
    
  }
  
}


