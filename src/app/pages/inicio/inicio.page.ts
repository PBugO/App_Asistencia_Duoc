import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrComponent } from 'src/app/components/qr/qr.component';
import { MiclaseComponent } from 'src/app/components/miclase/miclase.component';
import { ForoComponent } from 'src/app/components/foro/foro.component';
import { MisdatosComponent } from 'src/app/components/misdatos/misdatos.component';
import { DataBaseService } from 'src/app/services/data-base.service';
import { APIClientService } from 'src/app/services/apiclient.service';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
    QrComponent, MiclaseComponent, ForoComponent, MisdatosComponent, AdminComponent
  ],
})
export class InicioPage implements OnInit {

  componente_actual = 'qr';
  esAdmin: boolean = false;
  usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private bd: DataBaseService,
    private api: APIClientService) { }

  ngOnInit() {
    this.authService.usuarioAutenticado.subscribe((usuario) => {
      if (usuario && usuario.correo === 'admin@admin.cl') {
        this.esAdmin = true;
      } else {
        this.esAdmin = false;
      }
    })

    if (this.esAdmin) {
      this.componente_actual = 'foro';
    } else {
      this.componente_actual = 'qr';
    }
    this.bd.datosQR.next('');
  }

  cambiarComponente(nombreComponente: string) {
    this.componente_actual = nombreComponente;
    if (this.componente_actual === 'foro') this.api.cargarPublicaciones();
    if (this.componente_actual === 'misdatos') this.authService.leerUsuarioAutenticado();
  }

  salir() {
    this.authService.logout();
    
  }

}
