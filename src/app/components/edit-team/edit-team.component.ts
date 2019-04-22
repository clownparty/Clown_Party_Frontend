import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: Team;
  id: number;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  onSubmit() {
    this.teamService
      .update(this.team);
      // .subscribe( () => this._authService.createTeam(this._createTeam.value));

      // needs to grab the correct values for teamname and slots; i'm not sure if it will as is?
      // should also assign it an id number
  }

  getTeam(): void {
    this.teamService.getTeams().subscribe(team => this.team = team);
    this.id = this.team.id
  }

  delTeam(): void {
    this.teamService.delete(this.id);
  }

  addSlot(slotNum) { 
    // save selected pokemon to selected slot
  }

  searchPoke(name) {
    // takes name, converts to id, returns as object (observable?) that can then have its information displayed
  }

}


// need to be able to: 
// 1) grab name from teamName input
// 2) search for pokemon input in pokeSearch input and display their information
// 3) somehow hook up the select component so that each slot in the dropdown actually connects with the appropriate slot?
// 3.5) pressing the button saves the selected pokemon to the selected slot
// 4) hitting "save and finish" saves the team
// [1-4 are the same as for "create team", and should be able to be largely copy-pasted i think]
// 5) hitting "delete" should delete team