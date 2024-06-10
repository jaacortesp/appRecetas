import { Injectable } from '@angular/core';
import { CanActivate, Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service'; // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLogin(state.url);
  }

  checkLogin(url?: string): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Método en tu servicio de autenticación

    if (!isAuthenticated) {
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
      return false;
    }

    return true;
  }
}

