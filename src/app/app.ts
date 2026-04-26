import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemHeroe } from './componentes/item-heroe/item-heroe';
import { ListaHeroe } from './componentes/lista-heroe/lista-heroe';
import { NuevoHeroe } from "./componentes/nuevo-heroe/nuevo-heroe";
import { Heroe } from './compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaHeroe, NuevoHeroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  heroes: Heroe[] = [
    {
      id: 620,
      nombre: 'Spider-Man',
      poderes: {
        velocidad: 95,
        inteligencia: 5
      },
      imagen: '',
      bando: 'bueno'
    },
    {
      id: 620,
      nombre: 'Batman',
      poderes: {
        velocidad: 85,
        inteligencia: 15
      },
      imagen: '',
      bando: 'malo'
    },
    {
      id: 620,
      nombre: 'Super-Man',
      poderes: {
        velocidad: 75,
        inteligencia: 25
      },
      imagen: '',
      bando: 'bueno'
    }
  ]

  agregarHeroe(heroe: Heroe) {
    this.heroes.push(heroe);
  }
}
