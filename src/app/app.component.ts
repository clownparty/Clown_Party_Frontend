import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "PokeTeam Builder";
  isLoggedIn: boolean

  constructor(private userApi: UserService, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.authservice.isLoggedIn.subscribe(status => this.isLoggedIn=status)
  }
}
