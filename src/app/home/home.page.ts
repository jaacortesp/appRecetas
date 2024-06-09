// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = 'Nombre';
  apellido: string = 'Apellido';
  mensaje: string = '';

  usuarioRecibido: string = '';
  passwordRecibido: string = '';

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.activatedRouter.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido =
          this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido =
          this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  registrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
      this.limpiar();
    } else {
      this.mensaje = 'usuario registrado';
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.mensaje = '';
  }
}

