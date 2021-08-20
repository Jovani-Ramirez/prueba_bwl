import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../../services/weather-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICountries } from '../../../interfaces/countries.interface';
import { IDataRain, IDataCurrent } from '../../../interfaces/dataRain.interface';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss']
})
export class HomeWeatherComponent implements OnInit {

  public countryForm: FormGroup;
  public dataRain: IDataRain[];
  public dataCurrent: IDataCurrent[];

  public weather: string;
  public condition: string;
  public icon: string;
  public country: string;
  public hour: string;
  public region: string;

  public countries: ICountries[] = [
    { value: 'Mexico', viewValue: 'Mexico', img: '../../../assets/flags/mexico.png' },
    { value: 'Costa Rica', viewValue: 'Costa Rica', img: '../../../assets/flags/cr.png' },
    { value: 'Chile', viewValue: 'Chile', img: '../../../assets/flags/chile.png' }
  ];


  constructor(
    private watherService: WeatherDataService
  ) {
    this.weather = '';
    this.condition = '';
    this.icon = '';
    this.country = '';
    this.hour = '';
    this.region = '';
    this.dataRain = [];
    this.dataCurrent = [];
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
    this.watherService.getWather(city, aqi).subscribe((d: any) => {
      this.weather = d.current.feelslike_c;
      this.condition = d.current.condition.text;
      this.icon = d.current.condition.icon;
      this.country = d.location.country;
      this.hour = d.location.localtime;
      this.region = d.location.name;
      this.dataRain = d.location;
      this.dataCurrent = d.current
    })
  }

}
