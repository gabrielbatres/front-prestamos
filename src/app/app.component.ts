import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import {PrestamosService} from "./service/prestamos.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, InputTextModule, RippleModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-prestamos';

  codigoMaterial:string = '';
  pesoArticulo: number = 0;
  prestamoEstimado: number = 0;

  constructor(private prestamosService:PrestamosService) {
  }

  calcularPrestanoSugerido(){
    this.prestamosService.getPrestamoEstimado(this.codigoMaterial, this.pesoArticulo).subscribe((prestamoEstimadoRes)=>{
      this.prestamoEstimado = prestamoEstimadoRes.prestamoEstimado;
    },error => {
      console.log(error)
    });
  }

}
