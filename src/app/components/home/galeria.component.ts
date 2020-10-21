import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  // Input es para poder recibir info que viene de afuera de este componente
  @Input('peliculas') peliculas; // Data que viene de afuera + como queremos que se llame aqui dentro del componente
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit(): void {
  }

}
