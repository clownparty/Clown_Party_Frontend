import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-view-all-teams',
  templateUrl: './view-all-teams.component.html',
  styleUrls: ['./view-all-teams.component.css']
})
export class ViewAllTeamsComponent implements OnInit {
  teamList : any;
  teamViewUrl = `{ApiUrl}/team/view/{team.id}`

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAll().subscribe((val:any) => {
      this.teamList = val;
    })
  }

}
