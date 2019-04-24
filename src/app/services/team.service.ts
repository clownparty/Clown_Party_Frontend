import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { Team } from '../models/team.model';

const ApiUrl = "https://pokemonteam-builder.herokuapp.com/api/v1"

@Injectable()      //{ providedIn: 'root' }
export class TeamService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  createTeam(teamData: Team) {
    return this.http.post(`${ApiUrl}/teams/team/new`, teamData);
  }

  getAll() {
    return this.http.get<Team[]>(`${ApiUrl}/teams/team`);
  }

  getByName(teamname: string) {
    return this.http.get(`${ApiUrl}/team/view/`);
  }

  getTeams(): Observable<any>  {
    return this.http.get(`${ApiUrl}/team/view`);
  }

  update(team: Team) {
    return this.http.put(`${ApiUrl}/team/edit`, team);
  }

  delete(id: number) {
    return this.http.delete(`${ApiUrl}/team/edit`);
  }

}

