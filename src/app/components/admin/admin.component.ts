import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { showAlertDUOC, showConfirmDUOC } from 'src/app/tools/message-routines';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [HttpClient, HttpClientModule],
  standalone: true,
})
export class AdminComponent implements OnInit {

  usuarios: Usuario[] = [];
  correo = '';


  constructor(private db: DataBaseService) { }

  ngOnInit() {
    this.db.listaUsuarios.subscribe((usuarios) => {
      this.usuarios = usuarios.sort((a, b) => a.nombre.localeCompare(b.nombre));
    });
    this.db.leerUsuarios();
  }

  async eliminarUsuario(usuario: any) {
    const respuesta = await showConfirmDUOC(`¿Realmente quieres borrar a ${usuario.nombre} ${usuario.apellido}?`);
    
    if (respuesta) {
      this.correo = usuario.correo;
      await this.db.eliminarUsuarioUsandoCorreo(this.correo);
      showAlertDUOC('El usuario fue eliminado');
    }
  }
  
}
