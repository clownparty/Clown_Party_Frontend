import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    public _authService: AuthenticationService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this._authService.login({
      email: this.username,
      password: this.password
    });
    // this.router.navigate(['/trainers/me']);
  }
}
