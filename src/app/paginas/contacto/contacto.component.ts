import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
/*
  usuario = {
    nombre:''
  };
*/
  miFormulario =  new FormGroup ({
    email: new FormControl('')
  });
  }

