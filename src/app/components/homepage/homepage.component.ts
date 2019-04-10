import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userApi: UserService) { }

  ngOnInit() {
    this.userApi.testRequest('hello').subscribe(data => console.log(data))
  }

}
