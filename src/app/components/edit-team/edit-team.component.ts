// import { Component, OnInit } from '@angular/core';
// import { TeamService } from '../../services/team.service';
// import { PokemonService } from '../../services/pokemon.service';

// @Component({
//   selector: 'app-edit-team',
//   templateUrl: './edit-team.component.html',
//   styleUrls: ['./edit-team.component.css']
// })
// export class EditTeamComponent implements OnInit {
//   teamName: string;
//   searchQuery: string;
//   selPoke: any;
//   slotSel: number;
//   sTeam = {
//     owner_id: undefined,
//     id: undefined,
//     teamname: undefined,
//     slot1: undefined,
//     slot2: undefined,
//     slot3: undefined,
//     slot4: undefined,
//     slot5: undefined,
//     slot6: undefined,
//   }

//   constructor(private teamService: TeamService, private pokeService: PokemonService) { }

//   ngOnInit(): void {
//     this.getTeam();
//   }

//   onSubmit() {
//     this.sTeam.teamname = this.teamName;
//     this.teamService
//       .update(this.sTeam)
//       .subscribe()
//     }

//   addSlot() { 
//     this.sTeam[`slot${this.slotSel}`] = this.selPoke;
//   }

//   searchPoke() {
//     this.pokeService.getByName(this.searchQuery).subscribe(val => this.selPoke=val);
//   }

//   getTeam(): void {
//     this.teamService.getTeams().subscribe(team => this.sTeam = team);
//     // this.sTeam.id = this.sTeam.id
//   }

//   delTeam(): void {
//     this.teamService.delete(this.sTeam.id);
//   }


// }


// // SHOULD:
// // 1) grab team from database and plug it into sTeam (overwriting the "undefined"s)
// // 2) overwrite the data in sTeam as user edits things 
