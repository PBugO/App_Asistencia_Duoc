import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desconocido',
  templateUrl: './desconocido.page.html',
  styleUrls: ['./desconocido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DesconocidoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volverAtras() {
    this.router.navigate(['/ingreso']);
  }


}
