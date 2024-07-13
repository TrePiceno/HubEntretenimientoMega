// Funciones para pintar las películas de la intefaz y ejecutar funciones como la elección de favoritos.
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  recommendedMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.recommendedMovies = this.movieService.getRecommendedMovies();
  }

  toggleFavorite(id: number): void {
    this.movieService.toggleFavorite(id);
    this.movies = this.movieService.getMovies();
    this.recommendedMovies = this.movieService.getRecommendedMovies();
  }
}




