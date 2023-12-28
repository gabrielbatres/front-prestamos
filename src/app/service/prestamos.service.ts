import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PrestamoEstimado} from "../model/PrestamoEstimado";

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  baseUrl:string = 'http://localhost:8080/v1/empenio/valuacion'
  constructor(private http:HttpClient) { }

  getPrestamoEstimado(codigoMaterial:string, pesoArticulo: number) : Observable<PrestamoEstimado> {
    return this.http.post<PrestamoEstimado>(this.baseUrl+ '/prestamoEstimado', {codigoMaterial, pesoArticulo});
  }

}
