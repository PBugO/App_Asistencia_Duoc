import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncorrectoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irIniciarSesion() {
    this.navCtrl.navigateForward('/ingreso');
  }


}
