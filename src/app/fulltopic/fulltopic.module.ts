import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FulltopicComponent } from './fulltopic.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FulltopicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FulltopicComponent
  ],
})
export class FulltopicModule { }
