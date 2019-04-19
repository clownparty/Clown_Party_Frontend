import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://pokemonteam-builder.herokuapp.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  user_id = new Subject<number>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: User) {
<<<<<<< HEAD
    return this._http.post(`${Api_Url}/users/register`, regUserData);
=======
    return this._http.post(`${Api_Url}/register`, regUserData);
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
  }

  login(loginInfo) {
    const str = 
      `grant-type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`
    
<<<<<<< HEAD
    return this._http.post(`${Api_Url}/users/login`, str).subscribe( (token: Token) => {
      console.log(token);
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
=======
    return this._http.post(`${Api_Url}/token`, str).subscribe( (token: any) => {
      // this.userInfo = token;
      localStorage.setItem('id_token', token.token);
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
      this.isLoggedIn.next(true);
      this.user_id.next(token.user_id);
      this._router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

<<<<<<< HEAD
    return this._http.get(`${Api_Url}/Account/UserInfo`, { headers: this.setHeader() });
=======
    return this._http.get(`${Api_Url}/trainers/me`, { headers: this.setHeader() });
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);

<<<<<<< HEAD
    this._http.post('${Api_Url}/Account/Logout', { headers: authHeader} );
=======
    this._http.post(`${Api_Url}/logout`, { headers: authHeader} );
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
<<<<<<< HEAD
    return new HttpHeaders().set('api-key', `Bearer ${localStorage.getItem('id_token')}`);
=======
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
>>>>>>> 51376d03024951d3c4f422455fb566e625fd08a6
  }
}
