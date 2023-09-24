import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {

  userPreguntaSecreta: string= '';
  usuario: Usuario= new Usuario('','','','','')


  constructor(private authService: AuthService, private router: Router) {

   }
 
  ngOnInit() {
    this.usuario=this.authService.reconocerUsuario()
  }

}
