import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-prediction';
  post: any;

  constructor(private ws: WeatherServiceService) {}

  ngOnInit(): void {
    this.ws.setData().subscribe(
      (response) => {
        this.post = response;
        console.log('Data Succesfully Send');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
