import { ViewCountryDetailsComponent } from './view-country-details/view-country-details.component';
import { WorldOMeterComponent } from './world-ometer/world-ometer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: WorldOMeterComponent
  },
  {
    path: ':slug',
    component: ViewCountryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldOMeterRoutingModule { }
