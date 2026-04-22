import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemHeroe } from './componentes/item-heroe/item-heroe';
import { ListaHeroe } from './componentes/lista-heroe/lista-heroe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaHeroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aaaa');
}
