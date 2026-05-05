import { Component, computed, input, output } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';
import { HeroeCambioPoderes } from '../../compartido/interfaces/HeroeCambioPoderes';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-item-heroe',
  imports: [KeyValuePipe, TitleCasePipe],
  templateUrl: './item-heroe.html',
  styleUrl: './item-heroe.css',
})
export class ItemHeroe {
  heroe = input.required<Heroe>();
  cambioPoder = output<HeroeCambioPoderes>();

  esVillano = computed(() => this.heroe().bando === 'malo');

  getMainStat(): string {
    const poderes = this.heroe().poderes;
    if (poderes.inteligencia >= poderes.velocidad) {
      return 'INT';
    }
    return 'SPD';
  }

  getStatLabel(key: string): string {
    const labels: Record<string, string> = {
      inteligencia: 'INT',
      velocidad: 'SPD'
    };
    return labels[key] || key.toUpperCase();
  }

  decrementaPoder (poder: Poder): void {
    this.cambioPoder.emit({heroe: this.heroe(), poder, valor: -1});
  }

  incrementaPoder (poder: Poder): void {
    this.cambioPoder.emit({heroe: this.heroe(), poder, valor: 1});
  }
}