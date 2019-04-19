import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "PokeTeam Builder";
  userListSubs: Subscription;
  userList: User[];
  isLoggedIn: boolean

  constructor(private userApi: UserService, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.userListSubs = this.userApi
    .getUser()
    .subscribe(res => {
      this.userList = res;
    });
    this.authservice.isLoggedIn.subscribe(status => this.isLoggedIn=status)
  }

  ngOnDestroy() {
    this.userListSubs.unsubscribe();
  }
}
