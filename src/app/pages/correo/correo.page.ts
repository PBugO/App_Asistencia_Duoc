import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule
  ]
})
export class CorreoPage implements OnInit {
  
  userEmail: string= '';
  loginError = '';

  constructor(private authService: AuthService, private router: Router,
    private navCtrl: NavController) { }




    verificarCorreo() {
      const correo = this.userEmail; 
      localStorage.setItem('correo', correo);
      this.authService.validarCorreo(this.userEmail);



    }


  irIniciarSesion() {
    this.navCtrl.navigateForward('/ingreso');
  }

  ngOnInit() {
  }

}
