import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  thisUser: boolean
  logUser: number
  dispUser: number

  constructor(private authservice: AuthenticationService, private route:ActivatedRoute) { } 

  ngOnInit(): void {
    const dispUser= this.route.snapshot.paramMap.get('id');
    this.authservice.user_id.subscribe(status => this.logUser=status)
    if (this.dispUser == this.logUser) {
      this.thisUser = true; }
    else {
      this.thisUser=false;
    }
  }

}
