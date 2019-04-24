import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { userInfo } from 'os';



const Api_Url = 'https://pokemonteam-builder.herokuapp.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: Token;
  isLoggedIn = new BehaviorSubject<boolean>(false);
  user_id = new BehaviorSubject<number>(undefined);

  constructor(private _http: HttpClient, private _router: Router) {
    console.log('Waddup') 
    if (localStorage.getItem('id_token')) {
      this.isLoggedIn.next(true);
    }
  }

  register(regUserData: User) {
    return this._http.post(`${Api_Url}/register`, regUserData);
  }

  login(loginInfo) {
    let data = {
      email: loginInfo.email,
      password: loginInfo.password
    };
    return this._http.post(`${Api_Url}/login`, data).subscribe( (token:any) => {
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
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

  getme() {
    return this._http.get(`${Api_Url}/trainers/me`, { headers: this.setHeader() });
  }


  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }
}
