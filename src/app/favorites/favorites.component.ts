// Componente para mostrar películas seleccionadas por usuario como favoritas
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  favorite: boolean;
  poster: string;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.favoriteMovies = this.movieService.getFavoriteMovies();
  }

  toggleFavorite(id: number): void {
    this.movieService.toggleFavorite(id);
    this.favoriteMovies = this.movieService.getFavoriteMovies();
  }
}
