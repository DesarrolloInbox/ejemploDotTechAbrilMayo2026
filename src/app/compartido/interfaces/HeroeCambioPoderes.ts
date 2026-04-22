import { Heroe, Poder } from "./heroe.interface";

export interface HeroeCambioPoderes {
  heroe: Heroe;
  poder: Poder;
  valor: number;
}