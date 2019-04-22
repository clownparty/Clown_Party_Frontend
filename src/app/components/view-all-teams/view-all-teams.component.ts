import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-teams',
  templateUrl: './view-all-teams.component.html',
  styleUrls: ['./view-all-teams.component.css']
})
export class ViewAllTeamsComponent implements OnInit {
  teamList = [];

  constructor() { }

  ngOnInit() {
    // retrive all teams and put them in teamList (ideally paginated)
  }

}
