import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  private _createTeam: FormGroup;

  constructor(private _form: FormBuilder, private _teamService: TeamService) { this.createForm(); }

  onSubmit() {
    this._teamService
      .createTeam(this._createTeam.value);
      // .subscribe( () => this._authService.createTeam(this._createTeam.value));
  }

  ngOnInit() {
  }

  createForm() {
    this._createTeam = this._form.group({
      id: new FormControl,
      owner_id: new FormControl,
      teamname: new FormControl,
      slot1: new FormControl,
      slot2: new FormControl,
      slot3: new FormControl,
      slot4: new FormControl,
      slot5: new FormControl,
      slot6: new FormControl,
    });
  }

}


// need to be able to: 
// 1) grab name from teamName input
// 2) search for pokemon input in pokeSearch input and display their information
// 3) somehow hook up the select component so that each slot in the dropdown actually connects with the appropriate slot?
// 3.5) pressing the button saves the selected pokemon to the selected slot
// 4) at some point grab the user's id and give it to the team's owner property
