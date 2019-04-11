import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "PokeTeam Builder";
  userListSubs: Subscription;
  userList: User[];

  constructor(private userApi: UserService) { }

  ngOnInit() {
    this.userListSubs = this.userApi
    .getUser()
    .subscribe(res => {
      this.userList = res;
    });
  }

  ngOnDestroy() {
    this.userListSubs.unsubscribe();
  }
}
