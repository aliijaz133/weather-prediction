import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private url: any =
    'https://angular-project-7d15e-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) {}

  setData() {
    return this.http.get(this.url);
  }
}
