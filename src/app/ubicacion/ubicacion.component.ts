import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  formularioForm:FormGroup;
  datos_formulario:any

  constructor(private FormBuilder:FormBuilder){
    this.formularioForm=this.FormBuilder.group({
      nombre:``,
      apellido:``,
      email:``,
      telefono:``,
      mensaje:``
    });
  }


  ngOnInit(){
    console.log("hola");
  }
  
  enviarDatos(){
    console.log("boton precionado");
    if (this.formularioForm.valid){
      this.datos_formulario = this.formularioForm.value;
      console.log("datos formulario:",this.datos_formulario);
    }
  }
}
