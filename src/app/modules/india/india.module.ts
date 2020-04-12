import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaListComponent } from './india-list/india-list.component';


@NgModule({
  declarations: [IndiaListComponent],
  imports: [
    CommonModule,
    IndiaRoutingModule
  ]
})
export class IndiaModule { }
