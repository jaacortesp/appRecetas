import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu-ppal',
    loadChildren: () => import('./menu-ppal/menu-ppal.module').then( m => m.MenuPpalPageModule)
  },
  {
    path: 'crear-receta',
    loadChildren: () => import('./crear-receta/crear-receta.module').then( m => m.CrearRecetaPageModule)
  },
  {
    path: 'buscar-receta',
    loadChildren: () => import('./buscar-receta/buscar-receta.module').then( m => m.BuscarRecetaPageModule)
  },
  {
    path: 'ingresar-ingredientes',
    loadChildren: () => import('./ingresar-ingredientes/ingresar-ingredientes.module').then( m => m.IngresarIngredientesPageModule)
  },
  {
    path: 'ing-ingr',
    loadChildren: () => import('./ing-ingr/ing-ingr.module').then( m => m.IngIngrPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
