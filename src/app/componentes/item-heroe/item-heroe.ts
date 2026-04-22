import { Component, computed, input, output } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';
import { HeroeCambioPoderes } from '../../compartido/interfaces/HeroeCambioPoderes';

@Component({
  selector: 'app-item-heroe',
  imports: [],
  templateUrl: './item-heroe.html',
  styleUrl: './item-heroe.css',
})
export class ItemHeroe {
  heroe = input.required<Heroe>();
  cambioPoder = output<HeroeCambioPoderes>();

  esVillano = computed(() => this.heroe().bando === 'malo');

  decrementaPoder (poder: Poder): void {
    this.cambioPoder.emit({heroe: this.heroe(), poder, valor: -1});
  }

  incrementaPoder (poder: Poder): void {
    this.cambioPoder.emit({heroe: this.heroe(), poder, valor: 1});
  }
}
