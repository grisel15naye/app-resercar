import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sedes } from "./sedes";


@Injectable({
  providedIn: 'root'
})
export class SedesService {

  constructor(private httpClient: HttpClient) { }

  getAllSedes(): Observable<Sedes[]> {
    return this.httpClient.get<Sedes[]>("http://localhost:8080/sedes/listar");
  }
  getSedes(id: number): Observable<Sedes> {
    return this.httpClient.get<Sedes>("http://localhost:8080/sedes/" + id);
  }

  createSedes(sedes: Sedes): Observable<Sedes> {
    return this.httpClient.post<Sedes>("http://localhost:8080/sedes", sedes);
  }
  updateSede(id: number, sedes: Sedes): Observable<Sedes> {
    return this.httpClient.put<Sedes>("http://localhost:8080/sedes/" + id, sedes);
  }

}