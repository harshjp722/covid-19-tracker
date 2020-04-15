import { UtilitiesModule } from './../utilities/utilities.module';
import { ViewCountryDetailsComponent } from './view-country-details/view-country-details.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldOMeterRoutingModule } from './world-ometer-routing.module';
import { WorldOMeterComponent } from './world-ometer/world-ometer.component';


@NgModule({
  declarations: [
    WorldOMeterComponent,
    ViewCountryDetailsComponent
  ],
  imports: [
    CommonModule,
    WorldOMeterRoutingModule,
    UtilitiesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorldOMeterModule { }
