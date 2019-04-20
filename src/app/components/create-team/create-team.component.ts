import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// need to be able to: 
// 1) grab name from teamName input
// 2) search for pokemon input in pokeSearch input and display their information
// 3) somehow hook up the select component so that each slot in the dropdown actually connects with the appropriate slot?
// 3.5) pressing the button saves the selected pokemon to the selected slot
// 4) at some point grab the user's id and give it to the team's owner property
// 5) hitting "save and finish" saves the team
