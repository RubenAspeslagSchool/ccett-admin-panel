import { Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { StopsComponent } from './stops/stops.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'routes',
        pathMatch: 'full'
    },
    {
        path: 'routes',
        component: RoutesComponent
    },
    {
        path: 'stops',
        component: StopsComponent
    }
];
