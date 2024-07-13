// Importación de componentes, servicios, y ruteo
import { provideRouter } from '@angular/router';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GenreComponent } from './genre/genre.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { MovieService } from './movie.service';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    GenreComponent,
    FavoritesComponent,
    MovieDetailComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'genre/:genre', component: GenreComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    CommonModule
  ]
})
export class AppModule { }

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, FormsModule, RouterModule),
    AuthService,
    AuthGuard,
    MovieService
  ],
  bootstrap: [AppComponent]
};



