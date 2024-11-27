import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
   formularioForm:FormGroup;
   datos_formulario:any

   constructor(private formBuilder:FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      mensaje:''
    });
   }
   ngOnInit(){
    console.log("hola");
   }
   enviarDatos(){
    if (this.formularioForm.valid){
      this.datos_formulario = this.formularioForm.value;
      console.log("datos formulario:",this.datos_formulario);
    }
   }
}
