import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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