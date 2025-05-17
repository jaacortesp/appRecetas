import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpoonacularPage } from './spoonacular.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SpoonacularPage', () => {
  let component: SpoonacularPage;
  let fixture: ComponentFixture<SpoonacularPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    })
    fixture = TestBed.createComponent(SpoonacularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
