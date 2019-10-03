import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from './result';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private  = 'https://swapi.co/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getResults(type: string, info: string): Observable<Result[]> {
    return this.http.get<Result[]>(`https://swapi.co/api/${type}/?search=${info}`);

  }
}