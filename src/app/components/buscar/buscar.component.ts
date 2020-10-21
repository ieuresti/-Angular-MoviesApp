import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router'; // Para saber cual es la ruta activa (necesitamos recibir un param)

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  buscar: string = '';

  constructor(public ps: PeliculasService,
              private router: ActivatedRoute) {

    // Revisamos el param que viene
    // Para subscribirnos a cualquier cambio que tenga este parametro(s) por el url
    this.router.params.subscribe( params => {
      console.log(params);
      // Si viene el texto
      if (params['texto']) {
        // Entonces disparamos el this.buscarPelicula()
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit(): void {
  }

  buscarPelicula() {

    // Si no escribio nada, retornamos para que no dispare la funcion
    if (this.buscar.length === 0) {
      return;
    }

    this.ps.buscarPelicula(this.buscar)
    .subscribe();
  }

}
