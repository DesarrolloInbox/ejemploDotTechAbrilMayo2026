import { Component, input } from '@angular/core';
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
  heroes = input.required<Heroe[]>()

  onCambioPoder({heroe, poder, valor}: HeroeCambioPoderes): void {
    heroe.poderes[poder] += valor;
  }
}
