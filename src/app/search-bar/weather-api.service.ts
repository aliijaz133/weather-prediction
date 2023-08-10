import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private httpReq: HttpClient) {
    const apiKey: any = 'e5a9acb7dd5ee7202d9a0dd5416972e4';
    const url: any = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
  }

  getData() {
    return this.httpReq.get;
  }
}
