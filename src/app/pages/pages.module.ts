import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component,
    	PagesComponent
	],
	exports: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component
	],
	imports: [
		SharedModule,
		PAGES_ROUTES
	]
})

export class PagesModule {}