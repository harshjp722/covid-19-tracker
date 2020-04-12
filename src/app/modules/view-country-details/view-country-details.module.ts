import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCountryDetailsRoutingModule } from './view-country-details-routing.module';
import { ViewCountryDetailsComponent } from './view-country-details/view-country-details.component';


@NgModule({
  declarations: [ViewCountryDetailsComponent],
  imports: [
    CommonModule,
    ViewCountryDetailsRoutingModule
  ]
})
export class ViewCountryDetailsModule { }
