import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaListComponent } from './india-list/india-list.component';
import { IndiaDetailsComponent } from './india-details/india-details.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [IndiaListComponent, IndiaDetailsComponent],
  imports: [
    CommonModule,
    IndiaRoutingModule,
    GoogleChartsModule
  ]
})
export class IndiaModule { }
