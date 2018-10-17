import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPreloadingStrategy } from './preloading-strategy';


const appRoutes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'thing', 
    loadChildren:'./thing-cu/thing-cu.module#ThingCuModule'
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingStrategy })],
    exports: [RouterModule],
    providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
