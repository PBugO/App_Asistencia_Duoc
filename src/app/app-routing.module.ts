import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //PAGINA POR DEFECTO
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./pages/clase/clase.module').then(m => m.ClasePageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then(m => m.IngresoPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then(m => m.CorreoPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages/pregunta/pregunta.module').then(m => m.PreguntaPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./pages/correcto/correcto.module').then(m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/incorrecto/incorrecto.module').then(m => m.IncorrectoPageModule)
  },
  //PAGINA NO ENCONTRADA (DEJAR AL FINAL SIEMPRE)
  {
    path: '**',
    loadChildren: () => import('./pages/desconocido/desconocido.module').then( m => m.DesconocidoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
