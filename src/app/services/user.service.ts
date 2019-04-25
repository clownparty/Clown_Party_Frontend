import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { User } from '../models/user.model';
import { Api_Url} from '../../environments/environment.prod';



@Injectable()      //{ providedIn: 'root' }
export class UserService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {

    return this.http.get<User[]>(`${Api_Url}/trainers`);
  }

  getById(id: number) {
    return this.http.get(`${Api_Url}/trainers/` + id);

  }

  getUser(): Observable<any>  {
    return this.http.get(`${Api_Url}/trainers/me`);
  }

  update(user: User) {
    return this.http.put(`${Api_Url}/users/trainers/me/edit`, user, { headers: this.setHeader() });
    
  }

  // delete(id: number) {
  //   return this.http.delete(`${Api_Url}/trainers/edit`, { headers: this.setHeader() });
  // }
  
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }

}

