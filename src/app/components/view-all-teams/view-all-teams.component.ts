import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-view-all-teams',
  templateUrl: './view-all-teams.component.html',
  styleUrls: ['./view-all-teams.component.css']
})
export class ViewAllTeamsComponent implements OnInit {
  teamList = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(add => this.teamList.push(add));
  }

}
