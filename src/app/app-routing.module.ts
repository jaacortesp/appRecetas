import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'menu-ppal',
    loadChildren: () => import('./menu-ppal/menu-ppal.module').then(m => m.MenuPpalPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'crear-receta',
    loadChildren: () => import('./crear-receta/crear-receta.module').then(m => m.CrearRecetaPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'buscar-receta',
    loadChildren: () => import('./buscar-receta/buscar-receta.module').then(m => m.BuscarRecetaPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'ingresar-ingredientes',
    loadChildren: () => import('./ingresar-ingredientes/ingresar-ingredientes.module').then(m => m.IngresarIngredientesPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'agregar',
    loadChildren: () => import('./services/pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./services/pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  { path: '**', 
    component: PageNotFoundComponent },
  {
    path: 'ingresar-ingredientes',
    loadChildren: () => import('./ingresar-ingredientes/ingresar-ingredientes.module').then( m => m.IngresarIngredientesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


