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


//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
	declarations: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component,
    	PagesComponent,
    	IncrementadorComponent,
    	GraficoDonaComponent
	],
	exports: [
		DashboardComponent,
    	ProgressComponent,
    	Graficas1Component
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule
	]
})

export class PagesModule {}