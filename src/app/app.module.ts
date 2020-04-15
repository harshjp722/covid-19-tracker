import { LayoutModule } from './modules/layout/layout.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ConfigModule } from './shared/services/base/config.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilitiesModule } from './modules/utilities/utilities.module';
import { ChartsModule } from 'ng2-charts';
import { BoxWidthDirective } from './shared/directives/box-width.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxWidthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    LayoutModule,
    UtilitiesModule,
    ChartsModule
  ],
  providers: [
    ConfigModule.init()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
