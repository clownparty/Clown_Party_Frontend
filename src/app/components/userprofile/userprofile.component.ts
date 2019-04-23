import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  thisUser: boolean
  logUser: number
  dispUser: number
  // user: {
  //   name: undefined,
  //   email: undefined,
  //   id: undefined,
  //   fav_poke: undefined
  // }
  user: User
  teams: []
  favePoke: any
  userid: number

  constructor(private authservice: AuthenticationService, private route:ActivatedRoute, private userService:UserService) { } 

  ngOnInit(): void {
    this.authservice.getme().subscribe((data:User) =>{
      this.user = data
    });
    const dispUser= this.route.snapshot.paramMap.get('id');
    let dispUserInt= +dispUser;
    if (this.dispUser == this.userid) {
      this.thisUser = true; }
    else {
      this.thisUser=false;
    }
    this.userService.getById(dispUserInt).subscribe((val: User) => this.user=val);
    // get teams and add to list
    // get favorite pokemo
  }

}


// Need to:
// 1) find user's teams (use user's id and match it to teams' owner_id) and add them to teams list
// 2) given favorite pokemon number, find pokemon and display its data
