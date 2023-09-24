import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  public escaneando = false;
  public datosQR = '';

  public bloqueInicio: number = 0;
  public bloqueTermino: number = 0;
  public dia: string = '';
  public horaFin: string = '';
  public horaInicio: string = '';
  public idAsignatura: string = '';
  public nombreAsignatura: string = '';
  public nombreProfesor: string = '';
  public seccion: string = '';
  public sede: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.datosQR = queryParams['datosQR'];
      const objetoDatosQR = JSON.parse(this.datosQR);
      this.bloqueInicio = objetoDatosQR.bloqueInicio;
      this.bloqueTermino = objetoDatosQR.bloqueTermino;
      this.dia = objetoDatosQR.dia;
      this.horaFin = objetoDatosQR.horaFin;
      this.horaInicio = objetoDatosQR.horaInicio;
      this.idAsignatura = objetoDatosQR.idAsignatura;
      this.nombreAsignatura = objetoDatosQR.nombreAsignatura
      this.nombreProfesor = objetoDatosQR.nombreProfesor;
      this.seccion = objetoDatosQR.seccion;
      this.sede = objetoDatosQR.sede;
    });
  }
  public limpiarDatos(): void {
    this.bloqueInicio = 0;
    this.bloqueTermino = 0;
    this.dia = '';
    this.horaFin = '';
    this.horaInicio = '';
    this.idAsignatura = '';
    this.nombreAsignatura = '';
    this.nombreProfesor = '';
    this.seccion = '';
    this.sede = '';
  }

}