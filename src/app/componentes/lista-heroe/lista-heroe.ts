import { Component } from '@angular/core';
import { Heroe } from '../../compartido/interfaces/heroe.interface';
import { ItemHeroe } from "../item-heroe/item-heroe";
import { HeroeCambioPoderes } from '../../compartido/interfaces/HeroeCambioPoderes';

@Component({
  selector: 'app-lista-heroe',
  imports: [ItemHeroe],
  templateUrl: './lista-heroe.html',
  styleUrl: './lista-heroe.css',
})
export class ListaHeroe {
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

  onCambioPoder({heroe, poder, valor}: HeroeCambioPoderes): void {
    heroe.poderes[poder] += valor;
  }
}
