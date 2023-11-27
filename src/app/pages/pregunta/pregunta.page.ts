import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';
import { showToast } from 'src/app/tools/message-routines';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class PreguntaPage implements OnInit {

  userPreguntaSecreta: string = '';
  userRespuestaSecreta: string = '';
  userPassword: string = ''
  loginError = '';
  usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router,
    private navCtrl: NavController, private db: DataBaseService) {
  }

  verificarPreguntaSecreta() {
    if (this.userRespuestaSecreta == this.usuario.respuestaSecreta) {
      this.router.navigate(['/correcto']);
    } else {
      this.router.navigate(['/incorrecto']);
    }
  }

  // }

  async ngOnInit() {
    const correo = localStorage.getItem('correo');
    if (correo) {
      const usuarioValidado = await this.db.leerUsuario(correo);
      if (usuarioValidado) {
        this.usuario = usuarioValidado;
      }
    }
  }

  irIniciarSesion() {
    this.navCtrl.navigateForward('/ingreso');
  }



}