import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherApi} from '../infrastructure/weather-api'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private weatherApi: WeatherApi) {}

  public fetchCurrentTemperature(latitude: number, longitude: number): Observable<number>{
    return this.weatherApi.getCurrentTemperature(latitude, longitude);
  }
}
