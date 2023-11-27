import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { showAlertDUOC, showToast } from 'src/app/tools/message-routines';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarme',
  templateUrl: './registrarme.page.html',
  styleUrls: ['./registrarme.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarmePage implements OnInit {

  usuario = new Usuario();
  repeticionPassword = '';
  correo = '';
  validacion = false;


  constructor(private authService: AuthService, private db: DataBaseService, private router: Router) { }

  ngOnInit() {
  }


  mostrarMensaje(nombreCampo: string, valor: string) {
    if (valor.trim() === '') {
      showAlertDUOC(`Debe ingresar un valor para el campo "${nombreCampo}".`);
      return false;
    }
    return true;
  }

  async registrarUsuario() {
    this.correo = this.usuario.correo;

    if (!this.mostrarMensaje('correo', this.usuario.correo)) { return }
    else {
      this.validarCorreo();
      //VALIDACIÓN DEL FORMATO DEL CORREO PARA PROSEGUIR CON EL REGISTRO
      if (this.validacion === true) {
        if (!this.mostrarMensaje('nombre', this.usuario.nombre)) return;
        if (!this.mostrarMensaje('apellidos', this.usuario.apellido)) return;
        if (!this.mostrarMensaje('pregunta secreta', this.usuario.preguntaSecreta)) return;
        if (!this.mostrarMensaje('respuesta secreta', this.usuario.respuestaSecreta)) return;
        if (!this.mostrarMensaje('contraseña', this.usuario.password)) return;
        if (this.usuario.password !== this.repeticionPassword) {
          showAlertDUOC(`Las contraseñas escritas deben ser iguales.`);
          return;
        }
        //SE DEBE VALIDAD EN LA BASE DE DATOS SI ES QUE EL CORREO (PK) EXISTE
        const correoExiste = await this.authService.verificarCorreoExistente(this.correo);
        if (correoExiste) {
          showAlertDUOC(`El correo ya existe en la base de datos.`);
        } else {
          //UNA VEZ PORFIN VALIDADO TODO LO ANTERIOR SE REGISTRA EL USUARIO
          try {
            const usuario = this.usuario.correo;
            const password = this.usuario.password;
            const nombre = this.usuario.nombre;
            const apellido = this.usuario.apellido;
            const preguntaSecreta = this.usuario.preguntaSecreta;
            const respuestaSecreta = this.usuario.respuestaSecreta;
            const sesionActiva = 'N';

            await this.db.crearUsuarioConDatos(usuario, password, nombre, apellido, preguntaSecreta, respuestaSecreta, sesionActiva);
            showAlertDUOC('El usuario fue registrado').then(() => {
              this.router.navigate(['/ingreso']);
            });

          } catch (error) {
            showAlertDUOC('ERROR al crear usuario');
          }
        }
      };
    }
  }

  salir() {
    this.router.navigate(['/ingreso']);
  }


  validarCorreo() {
    const regexCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (regexCorreo.test(this.usuario.correo)) {
      this.validacion = true;
    } else {
      showAlertDUOC(`El formato de correo no es valido`);
      this.validacion = false;
    }
  }
}
