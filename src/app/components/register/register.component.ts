import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {

  public myForm = {
    id: undefined,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    fav_poke: 0
  }
  public formError: string;

  constructor(public _authService: AuthenticationService) {
   }

   onSubmit() {
     this.formError = undefined;
     if (this.myForm.password !== this.myForm.confirmPassword) {
       this.formError = "Passwords do not match!";
       return
     } else if ( this.myForm.name && (this.myForm.name.length < 3 || this.myForm.email.length < 5) ) {
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
