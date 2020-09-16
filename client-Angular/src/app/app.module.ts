import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmsComponent } from './components/farms/farms.component';
import {HttpClientModule} from '@angular/common/http';
import { PondService } from './services/pond.service';
import { FormsModule } from '@angular/forms';
import { AddFarmComponent } from './components/farms/farms-form/add-farm.component';
import { AppRoutingModule } from './app.routing';
import { AddPondComponent } from './components/ponds/ponds-form/add-pond.component';
import { FarmService } from './services/farm.service';
import { ViewFarmComponent } from './components/farms/farms-view/view-farm.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    AddFarmComponent,
    AddPondComponent,
    ViewFarmComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PondService, FarmService,AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
