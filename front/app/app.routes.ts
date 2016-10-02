// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CanActivateViaOAuthGuard } from './oAuth.canActivateGuard';


// Route Configuration
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent , canActivate : [CanActivateViaOAuthGuard] },
  { path: 'login', component: LoginComponent },
	{ path: '',  redirectTo: '/home',  pathMatch: 'full'},
];

// Export routes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
