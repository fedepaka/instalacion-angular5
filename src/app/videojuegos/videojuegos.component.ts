import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: []
})

export class VideojuegosComponent {
  public nombre_juego: string;
  public descripcion: string;
  public es_retro: boolean;
  public mejor_juego_retro: string;
  public color: string;
  public year: number;
  public arrayJuegos: Array<string>;

  constructor() {
    this.nombre_juego = 'Príncipe de Persia';
    this.descripcion = 'amigos del barrio';
    this.es_retro = true;
    this.mejor_juego_retro = 'Super Mario 64.';
    this.color = 'red';
    this.year = 2018;
    this.arrayJuegos = ['Call of Dutty', 'Los Simpsons', 'Juego 1', 'Juego 2'];
  }
}
