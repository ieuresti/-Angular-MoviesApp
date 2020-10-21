import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public ps: PeliculasService,
              private router: Router) { }

  ngOnInit(): void {
  }

  buscarPelicula(texto: string) {

    // Si no escribio nada, retornamos para que no dispare la funcion(no haga nada)
    if (texto.length === 0) {
      return;
    }

    // Navegamos a la ruta o pagina buscar/:texto
    this.router.navigate(['buscar', texto]);

  }

}
