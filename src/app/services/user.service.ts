import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { User } from '../models/user.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com/api/v1"

@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {
<<<<<<< HEAD
    return this.http.get<any[]>(`${ApiUrl}/User`);
=======

    return this.http.get<User[]>(`${ApiUrl}/trainers`);
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
  }

  getById(id: number) {
    return this.http.get(`${ApiUrl}/trainers/` + id);

  }

  getUser(): Observable<any>  {
    return this.http.get(`${ApiUrl}/trainers/me`);
  }

<<<<<<< HEAD
  update(user: any) {
    return this.http.put(`${ApiUrl}/User/` + user.id, user);
=======
  update(user: User) {

    return this.http.put(`${ApiUrl}/trainers/me/edit`, user);
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
  }

  delete(id: number) {
    return this.http.delete(`${ApiUrl}/trainers/edit`);

  }

}

