import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home/home.component';
import { AccomodationComponent } from './ThingsToDo/Accomodation/accomodation/accomodation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccomodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
