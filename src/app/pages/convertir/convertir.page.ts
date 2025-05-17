import { Component, OnInit } from '@angular/core';
import { ServicioDBService } from '../../services/servicio-db.service';
import { Router } from '@angular/router';
//import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-convertir',
  templateUrl: './convertir.page.html',
  styleUrls: ['./convertir.page.scss'],
})
export class ConvertirPage implements OnInit {

  num_porc_base: number = 6;
  num_porc: number = 6;
  tiempo_horn: number = 20;
  factor: number = 1;

  arregloIngredientes: any = [
    {
      id: '',
      nombre: '',
      cantidad: 0,
      unidad_med: ''
    }
    
  ]

  constructor(private servicio: ServicioDBService, private router: Router) { }

  ngOnInit() {
    
  }


    convertir()
    {
      this.factor = this.num_porc/this.num_porc_base;
      if (this.factor > 0) {
        this.servicio.modificarCantidadesporFactor(this.factor).then(() => {
          this.servicio.presentToast('Cantidades actualizadas correctamente');
          this.router.navigate(['/listar']);
        }).catch(error => {
          this.servicio.presentToast('Error al actualizar las cantidades' + error);
        });
      } else {
        this.servicio.presentToast('El factor debe ser mayor que cero');
      }
    }
}
