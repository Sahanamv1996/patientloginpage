import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent, NavbarRightComponent, NavigationBarComponent } from './navigation-bar';
import { PatientComponent ,PatientLoginComponent,PatientSignupComponent } from './patient';
import { PhysicianComponent } from './physician/physician.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
    PatientComponent,
    PatientLoginComponent,
    PatientSignupComponent,
    PhysicianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
