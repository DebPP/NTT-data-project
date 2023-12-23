import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImbdApiModel } from '../models/imdb-api.model';


@Injectable({
  providedIn: 'root'
})
export class InitService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=4bc25661&t=';

  constructor(private http: HttpClient) { }

  getAll(name: string): Observable<ImbdApiModel> {
    return this.http.get<ImbdApiModel>(`${this.apiUrl}${name}`)
  }
}
