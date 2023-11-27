import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { showToast } from 'src/app/tools/message-routines';
import { Usuario } from '../model/usuario';
import { Storage } from '@ionic/storage-angular';
import { DataBaseService } from './data-base.service';

@Injectable()

export class AuthService {

  keyUsuario = 'USUARIO_AUTENTICADO';
  usuarioAutenticado = new BehaviorSubject<Usuario | null>(null);

  constructor(private router: Router, private bd: DataBaseService, private storage: Storage) { }

  inicializarAutenticacion() {
    this.storage.create();
  }

  async isAuthenticated(): Promise<boolean> {
    return await this.leerUsuarioAutenticado().then(usuario => {
      return usuario !== null;
    });
  }

  async login(correo: string, password: string) {
    await this.storage.get(this.keyUsuario).then(async (usuarioAutenticado) => {
      if (usuarioAutenticado) {
        this.bd.actualizarSesionActiva(correo, 'S');
        this.storage.set(this.keyUsuario, usuarioAutenticado);
        this.usuarioAutenticado.next(usuarioAutenticado);
        this.router.navigate(['inicio']);
      } else {
        await this.bd.validarUsuario(correo, password).then(async (usuario: Usuario | undefined) => {
          if (usuario) {
            showToast(`¡Bienvenido(a) ${usuario.nombre} ${usuario.apellido}!`);
            this.bd.actualizarSesionActiva(correo, 'S');
            this.storage.set(this.keyUsuario, usuario);
            this.usuarioAutenticado.next(usuario);
            this.router.navigate(['inicio']);
          } else {
            showToast(`El correo o contraseña son incorrectos`);
            this.router.navigate(['ingreso']);
          }
        });
      }
    });
  }

  async logout() {
    this.leerUsuarioAutenticado().then((usuario) => {
      if (usuario) {
        showToast(`¡Hasta pronto ${usuario.nombre} ${usuario.apellido}!`);

        setTimeout(() => {
          // Operaciones a realizar después del timeout
          this.bd.actualizarSesionActiva(usuario.correo, 'N');
          this.router.navigate(['ingreso']);
          this.storage.remove(this.keyUsuario);
          // Recargar la página
          location.reload();
        }, 1500);

      }
    })
  }

  async leerUsuarioAutenticado(): Promise<Usuario | undefined> {
    const usuario = await this.storage.get(this.keyUsuario).then(usuario => usuario as Usuario);
    this.usuarioAutenticado.next(usuario);
    return usuario;
  }

  setUsuarioAutenticado(usuario: Usuario) {
    this.storage.set(this.keyUsuario, usuario);
    this.usuarioAutenticado.next(usuario);
  }


  async validarCorreo(correo: string) {
    await this.bd.leerUsuario(correo).then(async (usuario: Usuario | undefined) => {
      if (usuario) {
        this.router.navigate(['pregunta']);
      } else {
        this.router.navigate(['incorrecto']);
      }
    });

  };

  //PARA LA PAGINA DE REGISTRO DE USUARIO
  async verificarCorreoExistente(correo: string): Promise<boolean> {
    return await this.bd.leerUsuario(correo).then((usuario: Usuario | undefined) => {
      return !!usuario; // Devuelve true si el usuario existe, false si no existe
    });
  }

}








