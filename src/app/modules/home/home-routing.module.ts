import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'home-weather', component: HomeWeatherComponent },
    { path: 'user-list', component: UserListComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
