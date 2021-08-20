import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    HomeWeatherComponent,
    DashboardComponent,
    HeaderComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
