import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemHeroe } from './componentes/item-heroe/item-heroe';
import { ListaHeroe } from './componentes/lista-heroe/lista-heroe';
import { NuevoHeroe } from "./componentes/nuevo-heroe/nuevo-heroe";
import { Heroe } from './compartido/interfaces/heroe.interface';
import { Heroeservicio } from './compartido/servicios/heroeservicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaHeroe, NuevoHeroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly #heroeServicio = inject(Heroeservicio);

  heroes = this.#heroeServicio.encontrarTodos();

  addHeroe(heroe: Heroe) {
    this.#heroeServicio.agregar(heroe);
  }
  
}
