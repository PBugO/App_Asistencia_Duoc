import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorrectoPage implements OnInit {

  userPreguntaSecreta: string = '';
  usuario: Usuario = new Usuario;


  constructor(private authService: AuthService, private router: Router,
    private navCtrl: NavController, private db: DataBaseService) {
  }

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
