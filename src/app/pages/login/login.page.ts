import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/serv-autoriz.service';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const isLoggedIn = this.authService.loginUser(this.usuario, this.password);
    if (isLoggedIn) {
      //alert('Inicio de sesión exitoso');
      this.router.navigate(['menu-ppal']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  registrar() {
    this.router.navigate(['./registro']);
  }

  salir() {
    App.exitApp();
  }

  ngOnInit() {
    this.usuario='';
    this.password='';
  }

}
