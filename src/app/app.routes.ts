import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ErrorComponent } from './components/shared/error/error.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'error', component:ErrorComponent},
    {path: '**', redirectTo:"/error"},
    {path: 'recommendations', loadComponent: () => import ('./components/recommendations/list/list.component') },
    {path: 'places', loadChildren: () => import('./components/places/places.routes').then(m => m.routes) },
    {path: 'Edit', loadChildren: () => import('./components/Edit/Edit.routes').then(m => m.routes) }
];
