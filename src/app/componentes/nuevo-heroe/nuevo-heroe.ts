import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Heroe } from '../../compartido/interfaces/heroe.interface';
import { validaNombreHeroe } from '../../compartido/validadores/validadorNombre';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nuevo-heroe',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './nuevo-heroe.html',
  styleUrl: './nuevo-heroe.css',
})
export class NuevoHeroe {
  readonly #fB = inject(FormBuilder)
  mensajeError = ''
  agregarNuevo = output<Heroe>()
  formVisible = signal(false)
  poderesArray = ['inteligencia', 'velocidad']

  heroeForm: FormGroup = this.#fB.group({
    nombre: ['', Validators.required, validaNombreHeroe],
    bando: ['bueno'],
    imagen: ['imagen1.jpg'],
    poderes: this.#fB.group({
      inteligencia: [50, [Validators.required, Validators.max(100), Validators.min(0)]],
      velocidad: [50, [Validators.required, Validators.max(100), Validators.min(0)]]
    }),
  })

  toggleForm() {
    this.formVisible.update(v => !v);
  }

  agregarHeroe() {
    if (this.heroeForm.invalid) {
      this.mensajeError = 'Formulario inválido. Por favor, complete los campos requeridos.';
    } else {
      const heroe: Heroe = {
        id: Math.floor(Math.random() * 1000)+1,
        ...this.heroeForm.value,
        poderes: { ...this.heroeForm.value.poderes }
      }
      console.log("nuevo heroe", heroe);
      
      this.agregarNuevo.emit(heroe);
      this.heroeForm.reset({
        nombre: '',
        bando: 'bueno',
        imagen: 'imagen1.jpg',
        poderes: { inteligencia: 50, velocidad: 50 }
      });
      this.formVisible.set(false);
    }
  }
}