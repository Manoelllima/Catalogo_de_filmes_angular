import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private http: HttpClient) { }

  getData(url:string){
     return fetch(url, environment.options)
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.error(err));

  }
}
