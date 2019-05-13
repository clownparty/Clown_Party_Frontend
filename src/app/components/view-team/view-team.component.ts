import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  selectedPoke: Pokemon;
  team: any;
  urlid: number;
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

  constructor(private teamService: TeamService, private pokeService:PokemonService) { }

  ngOnInit() {
    // get id from url and pass it to getTeam
    this.urlid = 1
    this.getTeam(this.urlid);
  }

  selPoke(setPoke: Pokemon): void {
    this.selectedPoke = setPoke;
  }

  getTeam(id): void {
    this.teamService.getById(id).subscribe(team => {this.team=team;
      this.sTeam.owner_id=this.team.owner_id;
      this.sTeam.teamname=this.team.teamname;
      this.sTeam.id=this.team.id;
      this.sTeam.slot1=this.pokeService.getById(this.team.slot1);
      this.sTeam.slot2=this.pokeService.getById(this.team.slot2);
      this.sTeam.slot3=this.pokeService.getById(this.team.slot3);
      this.sTeam.slot4=this.pokeService.getById(this.team.slot4);
      this.sTeam.slot5=this.pokeService.getById(this.team.slot5);
      this.sTeam.slot6=this.pokeService.getById(this.team.slot6);
  })
  }

}
