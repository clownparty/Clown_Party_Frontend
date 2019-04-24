import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  selectedPoke: Pokemon;
  team: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeam();
  }

  selPoke(setPoke: Pokemon): void {
    this.selectedPoke = setPoke;
  }

  getTeam(): void {
    this.teamService.getTeams().subscribe(teem => this.team=teem);
  }

}
