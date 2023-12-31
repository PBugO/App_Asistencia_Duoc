import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard.service';
import { authGuard } from './guards/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
  {
    path: 'ingreso',
    loadComponent: () => import('./pages/ingreso/ingreso.page').then(m => m.IngresoPage),
    canActivate: [loginGuard]
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
    canActivate: [authGuard]
  },
  {
    path: 'correo',
    loadComponent: () => import('./pages/correo/correo.page').then(m => m.CorreoPage)
  },
  {
    path: 'pregunta',
    loadComponent: () => import('./pages/pregunta/pregunta.page').then(m => m.PreguntaPage)
  },
  {
    path: 'correcto',
    loadComponent: () => import('./pages/correcto/correcto.page').then(m => m.CorrectoPage)
  },
  {
    path: 'incorrecto',
    loadComponent: () => import('./pages/incorrecto/incorrecto.page').then(m => m.IncorrectoPage)
  },
  {
    path: 'registrarme',
    loadComponent: () => import('./pages/registrarme/registrarme.page').then( m => m.RegistrarmePage)
  },
  //DESCONOCIDO SIEMPRE AL FINAL (REVISAR CADA VEZ QUE SE CREE UNA NUEVA PAGINA)
  {
    path: '**',
    loadComponent: () => import('./pages/desconocido/desconocido.page').then(m => m.DesconocidoPage)
  },

];
