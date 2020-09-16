import { Routes, RouterModule } from '@angular/router';

import { FarmsComponent } from './components/farms/farms.component';
import { AddFarmComponent } from './components/farms/farms-form/add-farm.component';
import { AddPondComponent } from './components/ponds/ponds-form/add-pond.component';
import { ViewFarmComponent } from './components/farms/farms-view/view-farm.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
    { path: 'view-all-farms', component: FarmsComponent },
    { path: 'add-farm', component: AddFarmComponent },
    { path: 'add-pond', component: AddPondComponent },
    { path: 'view-farm', component: ViewFarmComponent },
    { path: '**', redirectTo: '' },
 
];

export const AppRoutingModule = RouterModule.forRoot(routes);