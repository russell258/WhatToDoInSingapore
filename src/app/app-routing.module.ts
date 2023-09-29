import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { AccomodationComponent } from './ThingsToDo/Accomodation/accomodation/accomodation.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'accomodation', component: AccomodationComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
