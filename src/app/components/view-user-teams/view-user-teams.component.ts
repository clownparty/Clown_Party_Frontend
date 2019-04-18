import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user-teams',
  templateUrl: './view-user-teams.component.html',
  styleUrls: ['./view-user-teams.component.css']
})
export class ViewUserTeamsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
