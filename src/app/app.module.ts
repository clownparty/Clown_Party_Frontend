import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { UserService } from './services/user.service';
import { ViewAllUsersComponent } from './components/view-all-users/view-all-users.component';
import { ViewAllTeamsComponent } from './components/view-all-teams/view-all-teams.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    PokemonListComponent,
    UserprofileComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    ViewAllUsersComponent,
    ViewAllTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
