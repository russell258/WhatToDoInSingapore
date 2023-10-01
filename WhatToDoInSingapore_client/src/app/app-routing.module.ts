import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'accomodation', component: AccomodationComponent},
  {path:'attractions', component: AttractionsComponent},
  {path:'nightlife', component:BarsAndClubsComponent},
  {path:'cruises',component:CruisesComponent},
  {path:'events',component:EventsComponent},
  {path:'fb',component:FbComponent},
  {path:'shoppingmall',component:MallsAndShopsComponent},
  {path:'tours',component:ToursComponent},
  {path:'venues',component:VenuesComponent},
  {path:'trails',component:WalkingTrailsComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
