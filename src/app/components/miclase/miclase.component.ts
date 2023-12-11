import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ViewWillEnter } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Asistencia } from 'src/app/model/asistencia';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.component.html',
  styleUrls: ['./miclase.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [HttpClient, HttpClientModule],
  standalone: true,
})
export class MiclaseComponent implements ViewWillEnter {

  asistencia = new Asistencia();


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

  constructor(private route: ActivatedRoute, private router: Router,
    private bd: DataBaseService) {
    this.bd.datosQR.subscribe((datosQR) => {
      this.asistencia = new Asistencia().obtenerAsistenciaDesdeQR(datosQR);
    })
  }


  ionViewWillEnter() {

    this.asistencia = new Asistencia();

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
    this.asistencia = new Asistencia();

  }


}
