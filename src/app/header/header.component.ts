import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthed: boolean;

  constructor(
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    this._authService.isLoggedIn.subscribe(value => {
      console.log("TEST")
      this.isAuthed = value;
    })
  }

}
