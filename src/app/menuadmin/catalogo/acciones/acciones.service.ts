import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acciones } from './acciones-listar/acciones';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {
  //Acciones apis
  constructor(private httpClient: HttpClient) {}
  getAllAcciones():Observable<Acciones[]>{
    return this.httpClient.get<Acciones[]>("http://localhost:8080/acciones/listar")
  }
  getAcciones(id: number):Observable<Acciones>{
    return this.httpClient.get<Acciones>("http://localhost:8080/acciones/"+id)
  }
  createAcciones(acciones:Acciones):Observable<Acciones>{
    return this.httpClient.post<Acciones>("http://localhost:8080/acciones/registrar",acciones)
  }
}
