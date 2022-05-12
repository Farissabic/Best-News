import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";


@Injectable({providedIn : 'root'})
export class WeatherService {

    key : string = 'f34b785c2967fe5775c23b46e89047ef'
    

    constructor (private http : HttpClient){}

    localWeather(lat : string , lon : string){
        return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather', {params : new HttpParams()
                .set('appid',this.key)
                .set('lat',lat)
                .set('lon',lon)
        }).pipe(map(res=>{
            const response = res;
            return response;
        }))
    }


    cityWeather(city : string){
        return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather',{
            params :new HttpParams().set('appid',this.key)
                                    .set('q', city)
        }).pipe(map(res=>{
            const weather = res;
            return weather;
        }))
    }

}