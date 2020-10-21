import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  // El pipe recibe un obj de pelicula y decimos si queremos el poster
  transform(pelicula: any, poster: boolean = false): any {

    // Path de la img
    let url = 'http://image.tmdb.org/t/p/w500';

    // Si el poster es true o especificamos que lo queremos, lo retornamos
    if (poster) {
      return url + pelicula.poster_path;
    }

    // Revisamos si el backdrop_path (img) existe dentro de la pelicula que recibimos
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path; // Si existe retornamos el backdrop
    } else { // Si no existe...
      // Verificamos si existe el poster_path
      if (pelicula.poster_path) {
        return url + pelicula.poster_path; // Si existe retornamos el poster
      } else { // Si tampoco existe...
        return "assets/img/no-image.png"; // Retornamos una img por defecto
      }
    }

  }

}
