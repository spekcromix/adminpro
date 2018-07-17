import { RouterModule, Routes } from '@angular/router';

// Guards
import { AdminGuard, LoginGuardGuard } from '../services/service.index';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';




const pagesRoutes: Routes = [
	{ 
		path: '',
		component: PagesComponent,
		canActivate: [ LoginGuardGuard ],
		children: [
			{ path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
			{ path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
			{ path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
			{ path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
			{ path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
			{ path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
			{ path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
			{ path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Busqueda' } },
			// Mantenimientos
			{ 
				path: 'usuarios', 
				component: UsuariosComponent,
				canActivate: [ AdminGuard ],
				data: { titulo: 'Mantenimiento de Usuarios' } 
			},
			{ path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
			{ path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Medicos' } },
			{ path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Medico' } },
			{ path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
		]
	}];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
