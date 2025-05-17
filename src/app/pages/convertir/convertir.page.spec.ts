import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertirPage } from './convertir.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ConvertirPage', () => {
  let component: ConvertirPage;
  let fixture: ComponentFixture<ConvertirPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    })
    fixture = TestBed.createComponent(ConvertirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
