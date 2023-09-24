import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios: Usuario[] = [];
  usuario = new Usuario('','','','','');

  constructor() { 
    this.usuarios = this.usuario.listaUsuariosValidos();
    console.log(this.usuarios)
   }

  verificarCorreo(email: string): Usuario | null {
    console.log('Lista de usuarios:', this.usuarios);
    const usuario = this.usuarios.find(u => u.correo === email);
      if (usuario) {
        this.usuario= usuario
        return usuario;
    } else {
        return null;
    }
  }

  verificarNombreUsuario(nombre: string): Usuario | null {
    console.log('Lista de usuarios:', this.usuarios);
    const usuario = this.usuarios.find(u => u.nombre === nombre);
      if (usuario) {
        this.usuario= usuario
        return usuario;
    } else {
        return null;
    }
  }

  verificarPreguntaSecreta(respuesta: string): Usuario | null {
    console.log('Lista de usuarios:', this.usuarios);
    if (this.usuario && this.usuario.respuestaSecreta === respuesta) {
      return this.usuario;
    } else {
      return null;
    }
  }

  reconocerUsuario(): Usuario{
    return this.usuario
  }

}

