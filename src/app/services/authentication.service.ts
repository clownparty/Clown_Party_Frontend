import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';



const Api_Url = 'https://pokemonteam-builder.herokuapp.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  user_id = new Subject<number>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: User) {
    return this._http.post(`${Api_Url}/register`, regUserData);
  }

  login(loginInfo) {
    return this._http.post(`${Api_Url}/login`, JSON.stringify(loginInfo), {headers: this.setHeader()}).subscribe( (token: Token) => {
      // this.userInfo = token;
      localStorage.setItem('id_token', token.token_type);
      this.isLoggedIn.next(true);
      this.user_id.next();
      this._router.navigate(['/trainers/me']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/trainers/me`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);

    this._http.post(`${Api_Url}/logout`, { headers: authHeader} );
    this._router.navigate(['/login']);
  }


  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }
}
