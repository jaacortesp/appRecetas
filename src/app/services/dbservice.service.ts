import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private storage: Storage) {}

  // Tu código utilizando el servicio Storage
}

