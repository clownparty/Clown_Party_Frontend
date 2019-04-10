import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

const ApiUrl = "#"

@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getUser(): Observable<User[]>  {
    return this.http.get(`${ApiUrl}/trainers`).pipe(
      map(data => {
        return data;
      }),
      catchError(error => { UserService._handleError(error) })
    );
  }

}

