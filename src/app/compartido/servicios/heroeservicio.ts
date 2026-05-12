import { Injectable } from '@angular/core';
import { Heroe, Poder } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class Heroeservicio {

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

  agregar(heroe: Heroe) {
    this.heroes.push(heroe);
  }

  actualizar(heroe: Heroe, poder: Poder, valor: number) {
    heroe.poderes[poder] += valor;
  }

  encontrarTodos(): Heroe[] {
    return this.heroes;
  }
}
