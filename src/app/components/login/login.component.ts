import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/AlertService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private _form: FormBuilder, 
    private _authService: AuthenticationService, 
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this._loginForm = this._form.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this._authService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

get f() { return this._loginForm.controls; }

  createForm() {
    this._loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    console.log(this._loginForm.value);
    this.router.navigate(['/'])
    this._form
  }
}
