import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailPage } from './recipe-detail.page';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('RecipeDetailPage', () => {
  let component: RecipeDetailPage;
  let fixture: ComponentFixture<RecipeDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, ActivatedRoute]
    })
    fixture = TestBed.createComponent(RecipeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
