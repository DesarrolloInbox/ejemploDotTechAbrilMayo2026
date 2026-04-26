import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Heroe } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-nuevo-heroe',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-heroe.html',
  styleUrl: './nuevo-heroe.css',
})
export class NuevoHeroe {
  readonly #fB = inject(FormBuilder)
  mensajeError = ''
  agregarNuevo = output<Heroe>()

  heroeForm: FormGroup = this.#fB.group({
    nombre: ['Jocker', Validators.required],
    bando: ['malo'],
    imagen: ['https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Rebirth%29.png'],
    poderes: this.#fB.group({
      inteligencia: [95, [Validators.required, Validators.max(100), Validators.min(0)]],
      velocidad: [5, [Validators.required, Validators.max(100), Validators.min(0)]]
    }),
  })

  agregarHeroe() {
    if (this.heroeForm.invalid) {
      this.mensajeError = 'Formulario inválido. Por favor, complete los campos requeridos.';
    } else {
      const heroe: Heroe = {
        id: Math.floor(Math.random() * 1000)+1, // Genera un ID aleatorio para el nuevo héroe
        ...this.heroeForm.value,
        poderes: { ...this.heroeForm.value.poderes }
      }
      console.log("nuevo heroe", heroe);
      
      this.agregarNuevo.emit(heroe);
    }

  }
}
