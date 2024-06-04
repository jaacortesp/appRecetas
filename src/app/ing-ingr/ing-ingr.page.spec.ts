import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngIngrPage } from './ing-ingr.page';

describe('IngIngrPage', () => {
  let component: IngIngrPage;
  let fixture: ComponentFixture<IngIngrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngIngrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
