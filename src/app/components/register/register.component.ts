import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthenticationService) {
    this.createForm();
   }

   onSubmit() {
     console.log(this._registerForm.value);
     this._authService
      .register(this._registerForm.value)
      .subscribe( () => this._authService.login(this._registerForm.value));
   }

  ngOnInit() {
  }

  createForm() {
    this._registerForm = this._form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmpassword: new FormControl,
      fav_poke: new FormControl
    });
  }
}
  