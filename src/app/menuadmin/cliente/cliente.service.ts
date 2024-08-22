
import { HttpClient } from '@angular/common/http';
import{Injectable}from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteComponent } from './cliente.component';
import { Cliente } from './cliente';

@Injectable({
    providedIn:'root'
})
export class ClienteService{
    constructor(private httpClient: HttpClient) { }

    getAllCliente():Observable<Cliente[]>{
        return this.httpClient.get<Cliente[]>("http://localhost:8080/clientes/listar")
    }

    getCliente(id: number):Observable<Cliente[]>{
        return this.httpClient.get<Cliente[]>("http://localhost:8080/clientes/listar"+id)
    }
    createCliente(Cliente: Cliente):Observable<Cliente>{
        return this.httpClient.post<Cliente>("lochttp://localhost:8080/clientes",Cliente)
    }
}
