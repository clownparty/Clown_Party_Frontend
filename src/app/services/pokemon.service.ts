import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com/api/v1"

@Injectable()      //{ providedIn: 'root' }
export class PokemonService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  getAll() {
    return this.http.get<Pokemon[]>(`${ApiUrl}/pokemon/all`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${ApiUrl}/pokemon/number/${id}`);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${ApiUrl}/pokemon/name/${name}`);
  }

  // getByType(type1: string, type2: string) {
  //   return this.http.get(`${ApiUrl}/pokemon`);
  // }

}

