import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { Team } from '../models/team.model';
import { Api_Url} from '../../environments/environment.prod';



@Injectable()      //{ providedIn: 'root' }
export class TeamService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any ) {
    return Observable.throw(err.message || 'Error: Unable to complete request');
  }

  createTeam(teamData: Team) {
    return this.http.post(`${Api_Url}/team/new`, teamData);
  }

  getAll() {
    return this.http.get<Team[]>(`${Api_Url}/team`);
  }

  getByName(teamname: string) {
    return this.http.get(`${Api_Url}/team/view/`);
  }

  getTeams(): Observable<any>  {
    return this.http.get(`${Api_Url}/team/view`);
  }

  update(team: Team) {
    return this.http.put(`${Api_Url}/team/edit`, team);
  }

  delete(id: number) {
    return this.http.delete(`${Api_Url}/team/edit`);
  }

}

