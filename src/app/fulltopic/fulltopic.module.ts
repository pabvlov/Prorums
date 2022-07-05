import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FulltopicComponent } from './fulltopic.component';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FulltopicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    FulltopicComponent
  ],
})
export class FulltopicModule { }
