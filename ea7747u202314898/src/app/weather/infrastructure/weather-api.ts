import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {map, Observable} from 'rxjs';
import {WeatherResponseResource} from './current-weather-resource';
import {WeatherAssembler} from './current-weather.assembler';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {


  constructor(private http: HttpClient) {}
  public getCurrentTemperature(latitude: number, longitude: number): Observable<number>{
    const baseUrl ='https://api.open-meteo.com/v1/forecast';
    const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
    return this.http.get<WeatherResponseResource>(url).pipe(
      map(response =>WeatherAssembler.toTemperature(response))
    );
  }
}
