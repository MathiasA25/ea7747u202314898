import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  private http: HttpClient;
  private baseUrl: "https://api.open-meteo.com/v1/forecast";

  public getCurrentTemperature(latitude: number, longitude: number): Observable<number>{
    const url = `${this.baseUrl}?latitude=${latitude}&longitude=${longitude}`;
    return this.http.get(url);
  }
}
