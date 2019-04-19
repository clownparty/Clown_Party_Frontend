import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { UserService } from './services/user.service';
import { ViewAllUsersComponent } from './components/view-all-users/view-all-users.component';
import { ViewAllTeamsComponent } from './components/view-all-teams/view-all-teams.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserTeamsComponent } from './components/view-user-teams/view-user-teams.component'
import { AuthenticationService } from './services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/AlertService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    PokemonListComponent,
    UserprofileComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    ViewAllUsersComponent,
    ViewAllTeamsComponent,
    EditTeamComponent,
    EditUserComponent,
    ViewUserTeamsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
