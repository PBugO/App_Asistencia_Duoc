import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/usuario';
import { BehaviorSubject } from 'rxjs';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class IngresoPage implements OnInit {

  correo = '';
  password = '';
  usuarioAutenticado = new BehaviorSubject<Usuario | null>(null);

  private usuariosDePruebaCreados: boolean = false;


  constructor(private authService: AuthService, private navCtrl: NavController, private db: DataBaseService) { }

  ngOnInit() {

    if (this.usuariosDePruebaCreados === false) {
      this.db.crearUsuariosDePrueba();
      this.usuariosDePruebaCreados = true;
    }

    this.usuarioAutenticado.next(null);

  }



  async ingresar() {
    this.authService.login(this.correo, this.password);

  }

  irARecuperarContrasena() {
    this.navCtrl.navigateForward('/correo');
  }

  irARegistrarme() {
    this.navCtrl.navigateForward('/registrarme');
  }

}

