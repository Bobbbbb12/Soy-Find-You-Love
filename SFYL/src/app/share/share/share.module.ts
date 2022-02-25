import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    
  ],
  imports: [CommonModule,
           ReactiveFormsModule,
           MatIconModule
            ],
  exports: [ReactiveFormsModule,MatIconModule],
})
export class ShareModule {}
