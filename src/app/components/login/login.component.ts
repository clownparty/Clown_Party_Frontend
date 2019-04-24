import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private _authService: AuthenticationService
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
