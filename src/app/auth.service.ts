import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false; // Simulación del estado de autenticación

  constructor() { }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Aquí podrías implementar la lógica real de autenticación, por ejemplo,
    // comprobar un token JWT en el almacenamiento local o una sesión activa.
    return this.loggedIn;
  }

  // Método para simular el inicio de sesión
  login() {
    this.loggedIn = true;
  }

  // Método para simular el cierre de sesión
  logout() {
    this.loggedIn = false;
  }
}
