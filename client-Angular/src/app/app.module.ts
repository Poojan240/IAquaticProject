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

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    AddFarmComponent,
    AddPondComponent,
    ViewFarmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PondService, FarmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
