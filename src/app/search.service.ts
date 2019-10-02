import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from './result';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private swapiURL = 'https://swapi.co/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getResults(type: string, info: string): Observable<Result[]> {
    return this.http.get<Result[]>(`https://swapi.co/api/${type}/?search=${info}`);

  }

  // private extractData(res: Response) {
  //       const body = res.json();
  //       return body || [];
  //   }

  // private handleError(error: any) {
  //     const errMsg = (error.message) ? error.message :
  //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //     console.error(errMsg); // log to console instead
  //     return Observable.throw(errMsg);
  // }
}
