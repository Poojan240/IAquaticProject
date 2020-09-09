import { Routes, RouterModule } from '@angular/router';

import { FarmsComponent } from './components/farms/farms.component';
import { AddFarmComponent } from './components/farms/farms-form/add-farm.component';
import { AddPondComponent } from './components/ponds/ponds-form/add-pond.component';
import { ViewFarmComponent } from './components/farms/farms-view/view-farm.component';

const routes: Routes = [
    { path: 'view-all-farms', component: FarmsComponent },
    { path: 'add-farm', component: AddFarmComponent },
    { path: 'add-pond', component: AddPondComponent },
    { path: 'view-farm', component: ViewFarmComponent },
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);