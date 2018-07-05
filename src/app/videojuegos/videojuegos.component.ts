import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: []
})

export class VideojuegosComponent {
  public nombre_juego: 'Príncipe de Persia';
  descripcion: 'amigos del barrio';
  es_retro: false;
  mejor_juego_retro: 'Super Mario 64.';
  color: 'yellow';

}
