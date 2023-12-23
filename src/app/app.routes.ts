import { Routes } from '@angular/router';
import { MainContentComponent } from './views/main-content/main-content.component';

export const routes: Routes = [
    {
		path: '',
		redirectTo: 'search',
		pathMatch: 'full'
	},
	{
		path: 'search',
		component: MainContentComponent
	},
];
