import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // Propiedades
  private apikey: string = 'dd93dc5fa39602e23f680ba780f65f7d';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  peliculas:any[] = [];

  constructor(private jsonp: HttpClientJsonpModule,
              private http: HttpClient) { }

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7); // Asi obtenemos la fecha de la cartelera de esa semana

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`; // Variables para cambiar el formato de las fechas
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
    .pipe(map( res => res['results'])); // Filtramos solo results porque no queremos que nos traiga las page, total_results y total_pages
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
    .pipe(map( res => res['results']));
  }

  getPopularesNinos() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
    .pipe(map( res => res['results']));
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
    .pipe(map( res => {
      this.peliculas = res['results'];
      console.log(this.peliculas);
      return res['results']
    }));
  }

  getPelicula(id: string) {
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
    .pipe(map( res => res));
  }
}
