import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon_name = Pokemon
  pokemonList=[]

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.pokeService.getAll().subscribe((val:any) => {
      this.pokemon_name = val;
    })
  }

}
