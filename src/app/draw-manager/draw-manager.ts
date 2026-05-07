import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DrawService } from '../draw.service'; // Ajusta la ruta a tu servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draw-manager',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './draw-manager.html',
  styleUrl: './draw-manager.css',
})
export class DrawManager {
objetoForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private drawService: DrawService
  ) {
    // Definimos los campos: nombre y combinacion
    this.objetoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      combinacion: ['', [Validators.required]]
    });
  }

  onSave() {
    if (this.objetoForm.valid) {
      const newDraw = this.objetoForm.value;
      
      this.drawService.save(newDraw).subscribe({
        next: (response) => {
          this.mensaje = '¡Objeto guardado con éxito!';
          this.objetoForm.reset(); // Limpiamos el formulario
        },
        error: (err) => {
          this.mensaje = 'Error al guardar el objeto';
          console.error(err);
        }
      });
    }
  }
}  
