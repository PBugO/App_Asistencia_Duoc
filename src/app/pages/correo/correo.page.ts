import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {
  
  userEmail: string= '';
  loginError = '';

  constructor(private authService: AuthService, private router: Router) { }

  verificarCorreo() {
    const email = this.userEmail;
    const autenticado = this.authService.verificarCorreo(email);
    
    if (autenticado) {
      this.authService.reconocerUsuario()
      this.router.navigate(['/pregunta']);
    } else {
      this.router.navigate(['incorrecto'])
    }
  }

  ngOnInit() {
  }

}
