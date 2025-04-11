import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { ProductoComponent } from './producto/producto/producto.component';

export const routes: Routes = [
    {path:'',redirectTo:'/inicio',pathMatch:"full"},
    {path:'inicio',component:InicioComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'producto',component:ProductoComponent}

];
