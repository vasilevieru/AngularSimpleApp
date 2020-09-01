import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  
  getRegions(): Observable<any> {
    return this.httpClient.get("https://uk-climate-api.herokuapp.com/");
  }

  getYears(): Observable<any> {
    return this.httpClient.get("https://uk-climate-api.herokuapp.com/years");
  }

  getTemperature(url_api: string): Observable<any> {
    return this.httpClient.get(url_api);
  }
}
