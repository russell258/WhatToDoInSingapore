import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home/home.component';
import { AccomodationComponent } from './ThingsToDo/Accomodation/accomodation/accomodation.component';
import { AttractionsComponent } from './ThingsToDo/Attractions/attractions/attractions.component';
import { BarsAndClubsComponent } from './ThingsToDo/Nightlife/bars-and-clubs/bars-and-clubs.component';
import { CruisesComponent } from './ThingsToDo/Cruises/cruises/cruises.component';
import { EventsComponent } from './ThingsToDo/Events/events/events.component';
import { FbComponent } from './ThingsToDo/FB/fb/fb.component';
import { MallsAndShopsComponent } from './ThingsToDo/ShoppingMall/malls-and-shops/malls-and-shops.component';
import { ToursComponent } from './ThingsToDo/Tours/tours/tours.component';
import { VenuesComponent } from './ThingsToDo/Venues/venues/venues.component';
import { WalkingTrailsComponent } from './ThingsToDo/Trails/walking-trails/walking-trails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccomodationComponent,
    AttractionsComponent,
    BarsAndClubsComponent,
    CruisesComponent,
    EventsComponent,
    FbComponent,
    MallsAndShopsComponent,
    ToursComponent,
    VenuesComponent,
    WalkingTrailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
