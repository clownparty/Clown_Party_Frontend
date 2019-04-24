import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  user: User;
  logUser: number;
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

  constructor(private _teamService: TeamService, private pokeService:PokemonService, private authservice: AuthenticationService, private _router: Router) { }

  ngOnInit() {}

  
  addSlot() { 
    this.sTeam[`slot${this.slotSel}`] = this.selPoke;
  }

  onSubmit() {
    if (!this.teamName) {
      this.sTeam.teamname = "Unnamed Team";
    } else {
      this.sTeam.teamname = this.teamName;
    }
    if (this.sTeam.slot1) {this.sTeam.slot1=this.sTeam.slot1.id} else {this.sTeam.slot1 = 37}
    if (this.sTeam.slot2) {this.sTeam.slot2=this.sTeam.slot2.id} else {this.sTeam.slot2 = 37}
    if (this.sTeam.slot3) {this.sTeam.slot3=this.sTeam.slot3.id} else {this.sTeam.slot3 = 37}
    if (this.sTeam.slot4) {this.sTeam.slot4=this.sTeam.slot4.id} else {this.sTeam.slot4 = 37}
    if (this.sTeam.slot5) {this.sTeam.slot5=this.sTeam.slot5.id} else {this.sTeam.slot5 = 37}
    if (this.sTeam.slot6) {this.sTeam.slot6=this.sTeam.slot6.id} else {this.sTeam.slot6 = 37}
    console.log(this.sTeam)
    this._teamService
      .createTeam(this.sTeam)
      .subscribe((team:Team) => { 
        this.sTeam = team; 
        this._router.navigate(['trainers/me']);
        console.log(team);
      });
  }

  ngOnInit() {
    this.authservice.getme().subscribe((data:User) =>{
      this.user = data;
      this.sTeam.owner_id = this.user.id;
    })
  }

  searchPoke() {
    this.pokeService.getByName(this.searchQuery).subscribe(val => this.selPoke=val);
  }
  
  addSlot() { 
    this.sTeam[`slot${this.slotSel}`] = this.selPoke;
    console.log(this.slotSel);
  }

}
