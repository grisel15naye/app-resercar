import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MispagosComponent } from './menu/mispagos/mispagos.component';
import { ReservarComponent } from './menu/reservar/reservar.component';
import { ServiciosComponent } from './menu/servicios/servicios.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { DashboardComponent } from './menuadmin/dashboard/dashboard.component';
import { UsuarioComponent } from './menuadmin/usuario/usuario.component';
import { ClienteComponent } from './menuadmin/cliente/cliente-listar/cliente.component';
import { SedesComponent } from './menuadmin/sedes/sedes.component';
import { ProgramacionComponent } from './menuadmin/programacion/programacion.component';
import { MisreservasComponent } from './menu/misreservas/misreservas.component';
import { Component } from '@angular/core';
import { AccionesComponent } from './menuadmin/catalogo/acciones/acciones-listar/acciones.component';
import { SedesListarComponent } from './menuadmin/sedes/sedes-listar/sedes-listar.component';
import { ClienteDetalleComponent } from './menuadmin/cliente/cliente-detalle/cliente-detalle.component';
import { TrabajadorComponent } from './menuadmin/trabajador/trabajador.component';

export const routes: Routes = [
    {path:"menu", component:MenuComponent,
        children: [
            
            {path: "home", component: MenuComponent},
            {path: "servicios", component: ServiciosComponent},
            {path: "reservar", component: ReservarComponent},
            {path: "misreservas", component: MisreservasComponent},
            {path: "mispagos", component: MispagosComponent}
        ]
    },
    
    {path:"menuadmin", component:MenuadminComponent,
        children: [
            {path: "dashboard", component: DashboardComponent},
            {path: "usuario", component: UsuarioComponent},
            {path:"acciones", component: AccionesComponent},
            {path: "cliente", component: ClienteComponent},
            {path: "cliente/:id", component: ClienteDetalleComponent},            
            {path: "sedes", component:SedesListarComponent},
            {path: "trabajador", component: TrabajadorComponent},
            {path: "programacion", component: ProgramacionComponent}
        ]
    }
];
