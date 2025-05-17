import { TestBed } from '@angular/core/testing';

import { ServicioDBService } from './servicio-db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('ServicioDBService', () => {
  let service: ServicioDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite, ServicioDBService]
    });
    service = TestBed.inject(ServicioDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
