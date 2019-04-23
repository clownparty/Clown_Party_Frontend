import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { PokemonService } from '../../services/pokemon.service'
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  thisUser: boolean
  logUser: number
  dispUser: number
  user: User
  teams: []
  favePoke: Pokemon
  favNum: number
  userid: number

  constructor(private authservice: AuthenticationService, private route:ActivatedRoute, private userService:UserService, private pokeService:PokemonService) { } 

  ngOnInit(): void {
    this.authservice.getme().subscribe((data:User) =>{
      this.user = data
      // console.log(this.user)
      this.favNum = this.user.fav_poke;
      this.pokeService.getById(this.favNum).subscribe((val:Pokemon) => {
        this.favePoke=val;
        // console.log(this.favePoke);
      });
    });
    // get teams and add to list
  }

}


// Need to:
// 1) find user's teams (use user's id and match it to teams' owner_id) and add them to teams list

