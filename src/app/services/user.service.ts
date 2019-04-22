import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { User } from '../models/user.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com/api/v1/users"

@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {

    return this.http.get<User[]>(`${ApiUrl}/trainers`);
  }

  getById(id: number) {
    return this.http.get(`${ApiUrl}/trainers/` + id);

  }

  getUser(): Observable<any>  {
    return this.http.get(`${ApiUrl}/trainers/me`);
  }

  update(user: User) {

    return this.http.put(`${ApiUrl}/trainers/me/edit`, user);
  }

  delete(id: number) {
    return this.http.delete(`${ApiUrl}/trainers/edit`);

  }

}

