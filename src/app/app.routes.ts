import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { OfertaComponent } from './paginas/oferta/oferta/oferta.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';

export const routes: Routes = [
    {path:'',redirectTo:'/inicio',pathMatch:"full"},
    {path:'inicio',component:InicioComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'producto',component:ProductoComponent},
    {path:'oferta',component:OfertaComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    {path:'carrito',component:CarritoComponent}

];
