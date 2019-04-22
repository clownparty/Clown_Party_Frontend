import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  logUser: number;

  private _createTeam: FormGroup;

  constructor(private _form: FormBuilder, private _teamService: TeamService, private authservice: AuthenticationService) { this.createForm(); }

  onSubmit() {
    this._teamService
      .createTeam(this._createTeam.value);
      // .subscribe( () => this._authService.createTeam(this._createTeam.value));

      // should also assign it an id number (assign on submit to prevent unused ids when someone starts to make a team, then quits without saving)
  }

  ngOnInit() {
    this.authservice.user_id.subscribe(status => this.logUser=status);
  }

  searchPoke(name) {
    // takes name, converts to id, returns as object (observable?) that can then have its information displayed
    // in python, would do for loop and find same name, then grab that instance... not sure how to do it in typescript 
  }
  
  addSlot(slotNum) { 
    // save selected pokemon to selected slot
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
