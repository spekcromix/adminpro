import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

const APP_ROUTES: Routes = [
	{ 
		path: '',
		component: PagesComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'progress', component: ProgressComponent },
			{ path: 'graficas1', component: Graficas1Component },
			{ path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', component: NopagefoundComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true }); 