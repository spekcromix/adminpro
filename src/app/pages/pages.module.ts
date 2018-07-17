import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';


// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
	declarations: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component,
    	PagesComponent,
    	IncrementadorComponent,
    	GraficoDonaComponent,
    	AccountSettingsComponent,
    	PromesasComponent,
    	RxjsComponent,
    	ProfileComponent,
		UsuariosComponent,
		ModalUploadComponent,
		HospitalesComponent,
		MedicosComponent,
		MedicoComponent,
		BusquedaComponent
	],
	exports: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component
	],
	imports: [
		CommonModule,
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule,
		PipesModule
	]
})

export class PagesModule {}