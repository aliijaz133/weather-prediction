import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormControlName,
} from '@angular/forms';
import { WeatherApiService } from './weather-api.service';
import { Observable, Subscriber } from 'rxjs';

// @Input() setData = "";
// @Output() getData: EventEmitter<string> = new EventEmitter<string>();
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  setLink: any;
  now!: number;
  constructor(private weatherApi: WeatherApiService) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  ngOnInit(): void {
    this.weatherApi.getData();
  }

  submitData() {}
}
