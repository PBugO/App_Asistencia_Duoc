import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  userPreguntaSecreta: string= '';
  userRespuestaSecreta: string= '';
  userPassword: string=''
  loginError = '';
  usuario: Usuario= new Usuario('','','','',''
  )

  constructor(private authService: AuthService, private router: Router) { 
  }

  verificarPreguntaSecreta() {
    this.usuario=this.authService.reconocerUsuario()
    const respuesta = this.userRespuestaSecreta;
    const autenticado = this.authService.verificarPreguntaSecreta(respuesta);
    if (autenticado) {
      this.router.navigate(['/correcto']);
    } else {
      this.router.navigate(['/incorrecto']);
    }

}

  ngOnInit() {
    this.usuario=this.authService.reconocerUsuario()
    }

}
