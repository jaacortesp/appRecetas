import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarIngredientesPage } from './ingresar-ingredientes.page';

describe('IngresarIngredientesPage', () => {
  let component: IngresarIngredientesPage;
  let fixture: ComponentFixture<IngresarIngredientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarIngredientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
