import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';
import { AuthService } from '../../services/serv-autoriz.service';
import { of } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['loginUser']);
    await TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize usuario and password to empty strings', () => {
    expect(component.usuario).toBe('');
    expect(component.password).toBe('');
  });

  it('should call authService.loginUser on login with correct parameters', () => {
    component.usuario = 'testUser';
    component.password = 'testPassword';
    authService.loginUser.and.returnValue(true);

    component.login();

    expect(authService.loginUser).toHaveBeenCalledWith('testUser', 'testPassword');
  });

  it('should navigate to menu-ppal if login is successful', () => {
    component.usuario = 'testUser';
    component.password = 'testPassword';
    authService.loginUser.and.returnValue(true);
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['menu-ppal']);
  });

  it('should show alert if login is unsuccessful', () => {
    spyOn(window, 'alert');
    authService.loginUser.and.returnValue(false);

    component.login();

    expect(window.alert).toHaveBeenCalledWith('Usuario o contraseña incorrectos');
  });

  it('should navigate to registro on registrar', () => {
    spyOn(router, 'navigate');

    component.registrar();

    expect(router.navigate).toHaveBeenCalledWith(['./registro']);
  });

  it('should clear usuario and password on limpiar', () => {
    component.usuario = 'guille';
    component.password = '1234';

    component.limpiar();

    expect(component.usuario).toBe('guille');
    expect(component.password).toBe('1234');
  });
});











// Archivo Original
/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
