import { inject } from '@angular/core';
import { Login } from './login/login';
import { DrawManager } from './draw-manager/draw-manager';
import { Routes } from '@angular/router';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  
  // Si no hay token, redirige al login
  inject(Router).navigate(['/login']);
  return false;
};

export const routes: Routes = [
  { 
        path: 'login', 
        component: Login },
  { 
    path: 'dashboard', 
    component: DrawManager, 
    canActivate: [authGuard] // <--- ¡Aquí ocurre la magia!
  }
];