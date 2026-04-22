import { Component, computed, input } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-item-heroe',
  imports: [],
  templateUrl: './item-heroe.html',
  styleUrl: './item-heroe.css',
})
export class ItemHeroe {
  heroe = input.required<Heroe>();

  esVillano = computed(() => this.heroe().bando === 'malo');

  decrementaPoder (poder: Poder): void {
    if (this.heroe().poderes[poder] > 0) {
      this.heroe().poderes[poder]--;
    }
  }

  incrementaPoder (poder: Poder): void {
    if (this.heroe().poderes[poder] < 100) {
      this.heroe().poderes[poder]++;
    }
  }
}
