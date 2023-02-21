import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weatherModel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){
    
  }
  cityName: string = "Mississauga";
  weatherData?: WeatherData;

  ngOnInit(): void{
    this.getWeatherData(this.cityName);
  }
  onSubmit(): void{
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(city: string){
    this.weatherService.getWeatherData(city)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    });
  }
}
