import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarRecetaPage } from './buscar-receta.page';

describe('BuscarRecetaPage', () => {
  let component: BuscarRecetaPage;
  let fixture: ComponentFixture<BuscarRecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
