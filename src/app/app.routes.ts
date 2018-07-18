import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { LoginGuardGuard } from './services/service.index';

const APP_ROUTES: Routes = [// { 
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{
		path: '',
		component: PagesComponent,
		canActivate: [ LoginGuardGuard ],
		loadChildren: './pages/pages.module#PagesModule'
	},
	{ path: '**', component: NopagefoundComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true }); 