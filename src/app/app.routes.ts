import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:texto', component: BuscarComponent }, // Aqui recibimos un parametro llamado texto a buscar
    { path: 'pelicula/:id/:pag', component: PeliculaComponent }, // Aqui ocupamos el id y la pag en la cual fue llamada la pelicula
    { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent }, // Opcional que recibe ademas el txt de busqueda
    { path: '', pathMatch: 'full', redirectTo: 'home' }, // Cualquier path vacio redireccionara al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }, // Cualquier otro path redireccionara al home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);