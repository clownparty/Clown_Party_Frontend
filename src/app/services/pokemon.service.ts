import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Api_Url} from '../../environments/environment.prod';

@Injectable()      //{ providedIn: 'root' }
export class PokemonService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {
    return this.http.get<Pokemon[]>(`${Api_Url}/pokemon/all`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Api_Url}/pokemon/number/${id}`);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${Api_Url}/pokemon/name/${name}`);
  }

  // getByType(type1: string, type2: string) {
  //   return this.http.get(`${ApiUrl}/pokemon`);
  // }

}

