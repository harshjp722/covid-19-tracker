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
import { BoxWidthDirective } from './shared/directives/box-width.directive';
import { GoogleChartsModule } from 'angular-google-charts';
import { DecimalPipe } from '@angular/common';

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
<<<<<<< HEAD
    GoogleChartsModule
=======
    GoogleChartsModule.forRoot('AIzaSyAlXc5tff5S-AGjiQfNU7eDGS7Rf7VgQ9I')
>>>>>>> 4fff146b75338cdfb4389bb7e6ffff6758068d59
  ],
  providers: [
    ConfigModule.init(),
    DecimalPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
