import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioRecibido: string='';
  passwordRecibido: string='';
  nombre: string='';
  apellido: string='';
  mensaje: string= '';
  /*selectedOption: string='';
  selectedDate: string='';*/
  usuarios: any = [];

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private alertController: AlertController) {
    this.activatedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();
      }
    })
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  registrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
      this.limpiar();
    } else {
      
      // Lógica para manejar el envío del formulario cuando es válido
      //this.router.navigate(['/menu-ppal'])
      this.mensaje = "usuario registrado";
    }

  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.mensaje = '';
    /*this.selectedOption = '';
    this.selectedDate = '';*/
  }
}
