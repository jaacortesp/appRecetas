import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar-ingredientes',
  templateUrl: './ingresar-ingredientes.page.html',
  styleUrls: ['./ingresar-ingredientes.page.scss'],
})
export class IngresarIngredientesPage implements OnInit {
  usuarioRecibido: string='';
  passwordRecibido: string='';
  nombrePreparacion: string='';
  apellido: string='';
  mensaje: string= '';
  selectedOption: string='';
  selectedDate: string='';
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
  ngOnInit() {
  }

}
