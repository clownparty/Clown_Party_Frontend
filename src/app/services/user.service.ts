import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { User } from '../models/user.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com"

@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getUser(): Observable<any>  {
    return this.http.get(`${ApiUrl}/trainers`)
  }

  testRequest(data:any): Observable<any> {
    return this.http.post(`${ApiUrl}/test`, data)
  }

}

