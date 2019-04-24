import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {

  private myForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    fav_poke: 0
  }
  private formError: string;

  constructor(private _authService: AuthenticationService) {
   }

   onSubmit() {
     this.formError = undefined;
     if (this.myForm.password !== this.myForm.confirmPassword) {
       this.formError = "Passwords do not match!";
       return
     } else if ( this.myForm.username && (this.myForm.username.length < 3 || this.myForm.email.length < 5) ) {
       this.formError = "Please enter valid information";
       return
     } else if ( this.myForm.fav_poke < 1 ) {
       this.formError = "Please enter a valid pokemon id";
       return
     } else {
       this._authService
        .register(this.myForm)
        .subscribe( () => this._authService.login({ email: this.myForm.email, password: this.myForm.password }));
     }
   }

  ngOnInit() {
  }

}
