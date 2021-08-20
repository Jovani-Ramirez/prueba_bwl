import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICountries } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public countryForm: FormGroup;
  public panelOpenState: boolean;

  public countries: ICountries[] = [
    {value: 'Mexico', viewValue: 'Mexico', img: '../../../assets/flags/mexico.png'},
    {value: 'Costa Rica', viewValue: 'Costa Rica', img: '../../../assets/flags/cr.png'},
    {value: 'Chile', viewValue: 'Chile', img: '../../../assets/flags/chile.png'}
  ];


  constructor(
    private watherService: WeatherDataService
  ) {
    this.panelOpenState = true;
    this.countryForm = new FormGroup({
      country: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }


  getWeather(): void {
    const city = this.countryForm.controls.country.value;
    localStorage.setItem('country', city);
    const aqi = 'no' 
    this.watherService.getWather(city, aqi).subscribe((d:any) => {
      console.log(d);
    })
  }

}
