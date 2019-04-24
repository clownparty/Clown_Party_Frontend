import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { AuthenticationService } from '../../services/authentication.service';
import {FindPokeComponent} from '../find-poke/find-poke.component';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  teamName: string;
  selPoke: any;
  slotSel: number;
  teamId: number;
  sTeam = {
    owner_id: undefined,
    teamname:undefined,
    id: undefined,
    slot1: undefined,
    slot2: undefined,
    slot3: undefined,
    slot4: undefined,
    slot5: undefined,
    slot6: undefined,
  }

  constructor(private _teamService: TeamService, private pokeService:PokemonService, private authservice: AuthenticationService) { }

  ngOnInit() {}

  
  addSlot() { 
    this.sTeam[`slot${this.slotSel}`] = this.selPoke;
  }

  onSubmit() {
    if (!this.teamName) {
      this.sTeam.teamname = 'Unnamed Team';
    } else {
    this.sTeam.teamname = this.teamName;
    }
    this._teamService
      .createTeam(this.sTeam)
      .subscribe()
  }

  findPoke($event) {
    this.selPoke = $event
  }
}
