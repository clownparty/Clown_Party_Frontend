import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user-teams',
  templateUrl: './view-user-teams.component.html',
  styleUrls: ['./view-user-teams.component.css']
})
export class ViewUserTeamsComponent implements OnInit {
  userTeamList = [];

  constructor(private location: Location) { }

  ngOnInit() {
    // retrieve teams with owner_id == logged-in user's id and put in userTeamList (ideally paginated)
  }

  goBack(): void {
    this.location.back();
  }
}
