import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  FormularioForm:FormGroup

  constructor(private formBuilder:FormBuilder){
    this.FormularioForm = this.formBuilder.group({

    });
  }

  ngOnInit(){
    console.log("hola");
  }

  enviarDatos(){
    if (this.FormularioForm.valid){
      let datos_formulario = this.FormularioForm.value;
      console.log("datos formulario",datos_formulario);
    }
  }
}
