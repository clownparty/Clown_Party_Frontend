import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  logUser: number;
  teamName: string;
  searchQuery: string;
  selPoke: any;
  slotSel: number;
  teamId: number;
  sTeam = {
    owner_id: undefined,
    teamname: undefined,
    id: undefined,
    slot1: undefined,
    slot2: undefined,
    slot3: undefined,
    slot4: undefined,
    slot5: undefined,
    slot6: undefined,
  }

  constructor(private _teamService: TeamService, private pokeService:PokemonService, private authservice: AuthenticationService) { }

  onSubmit() {
    this.sTeam.teamname = this.teamName;
    this.sTeam.id = this.teamId;
    this._teamService
      .createTeam(this.sTeam)
      .subscribe(
      //   (val, err) => {
      //   if(err){console.log(err);}
      //   else{console.log(val)}
      // });
      )
  }

  ngOnInit() {
    this.authservice.user_id.subscribe(status => this.logUser=status);
    this.sTeam.owner_id = this.logUser
  }

  searchPoke() {
    this.pokeService.getByName(this.searchQuery).subscribe(val => this.selPoke=val);
  }
  
  addSlot() { 
    this.sTeam[`slot${this.slotSel}`] = this.selPoke;
  }

}
