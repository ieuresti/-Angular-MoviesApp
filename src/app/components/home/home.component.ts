import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public ps: PeliculasService) {

    this.ps.getCartelera()
    .subscribe( data => this.cartelera = data );

    this.ps.getPopulares()
    .subscribe( data => this.populares = data );

    this.ps.getPopularesNinos()
    .subscribe( data => this.popularesNinos = data );
  }

  ngOnInit(): void {
  }

}
