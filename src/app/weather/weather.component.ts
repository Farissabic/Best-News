import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Weather } from './weather.model';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  location: any = [];
  weather: Weather = new Weather('New York',35, 'US',2,3,'','') ;
  cityWeather: Weather = new Weather('New York',35, 'US',2,3,'','');


  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(pos=>{
      this.location = pos.coords;
      console.log(this.location);
      const lat : string = this.location.latitude;
      const lon : string= this.location.longitude;
      
      this.weatherService.localWeather(lat,lon).subscribe(res=>{
        console.log(res);

      
        this.weather = new Weather(res.name, 
                                   Math.round( res.main.temp - 273.15),
                                   res.sys.country,
                                   Math.round(res.main.temp_max- 273.15),
                                   Math.round(res.main.temp_min- 273.15),
                                   'https://openweathermap.org/img/wn/'+res.weather[0].icon+'.png',
                                   res.weather[0].description
                                  )
      })
    })
  }

  findWeather(form : NgForm){
    console.log(form.value.city);
    console.log(form);

    this.weatherService.cityWeather(form.value.city).subscribe(res=>{
      this.cityWeather = new Weather(res.name, 
                                    Math.round( res.main.temp - 273.15),
                                    res.sys.country,
                                    Math.round(res.main.temp_max- 273.15),
                                    Math.round(res.main.temp_min- 273.15),
                                    'https://openweathermap.org/img/wn/'+res.weather[0].icon+'.png',
                                    res.weather[0].description
       )
       console.log(this.cityWeather);
    })

  }

  clear(form :NgForm){
    form.resetForm();
  }

}
