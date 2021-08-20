import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.API_KEY}`;
   }


   getWather(q: string, aqi: string) {
    return this.http.get(`${this.url}${q}&aqui${aqi}`);
  }

}
