import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User
  favePoke: Pokemon
  favNum: number

  constructor(private userService: UserService, private authservice: AuthenticationService, private pokeService: PokemonService, private _router: Router) { }

  ngOnInit(): void {
    // this.getUser();
    this.authservice.getme().subscribe((data:User) =>{
      this.user = data
      this.favNum = this.user.fav_poke;
      this.pokeService.getById(this.favNum).subscribe((val:Pokemon) => {
        this.favePoke=val;
      });
    });
  }
  // getUser(): void {
  //   this.userService.getUser().subscribe(user => this.user = user);
  //   this.id = this.user.id
  // }

  onSubmit() {
    console.log(this.user);
    this.userService.update(this.user)
      .subscribe( (user: User) => {
        this.user = user; 
        this._router.navigate(['users/trainers/me'])
      } );
  }

  delUser() {
    console.log('yo');
    this.userService.delete(this.user.id)
    .subscribe( (user:User) => {this.user = user;});
    this.authservice.logout();
  }

}
