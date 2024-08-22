import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acciones } from './acciones-listar/Acciones';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private httpClient: HttpClient) {}
  getAllAcciones():Observable<Acciones[]>{
    return this.httpClient.get<Acciones[]>("http://localhost:8080/acciones/listar")
  }
  createAcciones(acciones:Acciones):Observable<Acciones>{
    return this.httpClient.post<Acciones>("http://localhost:8080/acciones/registrar",acciones)
  }
}
