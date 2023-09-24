import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  userEmail: string = '';
  userPassword: string = ''
  formSubmitted: boolean = false;

  public usuario: Usuario = new Usuario('', '', '', '', '')
  public usuarios: Usuario[] = [];

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Has ingresado Correctamente',
      duration: 2500,
      position: position,
    });
    await toast.present();
  }

  ngOnInit() {
    this.usuarios = this.usuario.listaUsuariosValidos();
    console.log(this.usuarios)

  }

  login(): void {
    this.formSubmitted = true;
    if (this.userEmail.trim() === '' || this.userPassword.trim() === '') {
      alert('Por favor, completa todos los campos.');
    } else {
      const email = this.userEmail;
      const password = this.userPassword;
      console.log(email + password)
      const usuario = this.usuarios.find(u => u.correo === email);

      if (usuario?.correo && usuario.password === password) {

        const email = this.userEmail;
        const autenticado = this.authService.verificarCorreo(email);

        if (autenticado) {
          this.authService.reconocerUsuario()
        }
        this.presentToast('bottom')
        this.router.navigate(['/inicio']);

      } else {
        alert('Los datos ingresados son incorrectos.');
      }
    }
  }


}

