import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoPage } from './ingreso.page';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { APIClientService } from 'src/app/services/apiclient.service';
import { SQLiteService } from 'src/app/services/sqlite.service';
import { BehaviorSubject } from 'rxjs';


describe('Pruebas Página Ingreso:', () => {
  let component: IngresoPage;
  let fixture: ComponentFixture<IngresoPage>; // Fixture: es un objeto que contiene una instancia de un componente y su template

  // beforeEach se ejecuta antes de cada test
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule, CommonModule, IngresoPage],
      providers: [DataBaseService, AuthService, Storage, APIClientService, SQLiteService, DataBaseService],
    }).compileComponents();

    // Crea una instancia del componente
    fixture = TestBed.createComponent(IngresoPage);
    // Obtiene la instancia del componente
    component = fixture.componentInstance;
    // Detecta los cambios en el componente, por ejemplo cuando cambia el valor de una variable o se agregan elementos al DOM
    fixture.detectChanges();

  });

  it('1) Prueba para crear la página de ingreso', () => {
    // Verifica que el componente se haya creado
    expect(component).toBeTruthy();
  });

  it('2) Prueba de que los campos de inicio de sesión deberian estar vacios', () => {
    expect(component.correo).toBe('');
    expect(component.password).toBe('');
  });



  it('3) Prueba de que el usuario autenticado es null ya que nadie ha iniciado sesión', () => {
    const valorActual = (component.usuarioAutenticado as BehaviorSubject<any>).getValue();
    expect(valorActual).toBeNull();
  });



  it('4) Prueba de que debería navegar a la página de recuperar contraseña', () => {
    const navCtrl = TestBed.inject(NavController);
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.irARecuperarContrasena();
    expect(navigateSpy).toHaveBeenCalledWith('/correo');
  });

  it('5) Prueba de que debería navegar a la página de registrarme', () => {
    const navCtrl = TestBed.inject(NavController);
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.irARegistrarme();
    expect(navigateSpy).toHaveBeenCalledWith('/registrarme');
  });


  it('6) Prueba para iniciar sesión con Ana Torres', async () => {
    // Inyecta el servicio AuthService
    const authService = TestBed.inject(AuthService);
    // Espía el método login del servicio AuthService para verificar que se llame con los parámetros 'atorres@duocuc' y '1234'
    spyOn(authService, 'login');
    // Ejecuta el método ingresar del componente
    component.correo = 'atorres@duocuc.cl';
    component.password = '1234';
    await component.ingresar();
    // Verifica que el método login del servicio AuthService haya sido llamado con los parámetros 'atorres@duocuc' y '1234'
    expect(authService.login).toHaveBeenCalledWith('atorres@duocuc.cl', '1234');
  });



});


