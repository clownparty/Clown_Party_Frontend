import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
// import { User } from '../models/user.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com"

@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {
    return this.http.get<User[]>(`${ApiUrl}/User`);
  }

  getById(id: number) {
    return this.http.get(`${ApiUrl}/User` + id);
  }

  getUser(): Observable<any>  {
    return this.http.get(`${ApiUrl}/trainers`);
  }

  update(user: User) {
    return this.http.put(`${ApiUrl}/User/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${ApiUrl}/User/` + id);
  }

  testRequest(data:any): Observable<any> {
    return this.http.post(`${ApiUrl}/test`, data)
  }

}

