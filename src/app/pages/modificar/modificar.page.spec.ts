import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { ActivatedRoute } from '@angular/router';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite, ActivatedRoute]
    })
    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
