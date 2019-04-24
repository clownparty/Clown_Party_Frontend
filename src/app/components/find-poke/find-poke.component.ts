import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-find-poke',
  templateUrl: './find-poke.component.html',
  styleUrls: ['./find-poke.component.css']
})
export class FindPokeComponent implements OnInit {
  searchQuery: string;
  selPoke: any;

  constructor(private pokeService:PokemonService) { }

  ngOnInit() {
  }

  @Output() sharePoke = new EventEmitter<any>();

  searchPoke() {
    this.pokeService.getByName(this.searchQuery).subscribe(val => this.selPoke=val);
    this.sharePoke.emit(this.selPoke);
  }

}
