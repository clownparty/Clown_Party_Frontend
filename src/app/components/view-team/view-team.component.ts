import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  selectedPoke: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  selPoke(setPoke: Pokemon): void {
    this.selectedPoke = setPoke;
  }

}
