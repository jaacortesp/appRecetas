import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string="";
  password: string=""
  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.usuario.trim() == 'javiera' && this.password.trim() == '4321') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviada: this.password

        }
      }
      this.router.navigate(['/menu-ppal'], navigationExtras);
    }
    else {
      this.presentAlert('Password ncorrecta');

    }
  }
   
  registro() {
    this.router.navigate(['/home'])
  }
  async presentAlert(message: string) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: message,
        buttons: ['OK']
      });
      await alert.present();
 }
      
 


}
