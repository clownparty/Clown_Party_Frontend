import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList:any;
  

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.pokeService.getAll().subscribe((val:any) => {
      this.pokemonList = val;
    })
  }

}
