import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  
  producto = [
    {
      id:1, 
      nombre: 'Campera',
      descripcion:'...',
      precio: 100, 
      imagen :'https://m.media-amazon.com/images/I/71QwufyIeVL._AC_UL1500_.jpg' 
    },
    
    
    
    { 
      id:2,
      nombre: 'Buzo ',
      
      precio: 150 ,
      imagen:'https://travisofficialstore.com/wp-content/uploads/2023/03/Travis-Scott-themed-hoodie.png'
    },
    { 
    id:3,
    nombre: 'Pantalon',
    descripcion:'...',
    precio: 200 ,
    imagen:'https://i.pinimg.com/originals/0c/91/7c/0c917ce3e0045f19b8a1ed04d91be52f.png'
  }
  ]
   /*
   usuario = {
    nombre:'Jose',
    activo:true
   };
   */
}
