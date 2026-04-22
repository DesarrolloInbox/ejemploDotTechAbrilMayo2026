import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemHeroe } from './componentes/item-heroe/item-heroe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemHeroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aaaa');
}
