// Funciones para pintar las películas de la intefaz y ejecutar funciones como la elección de favoritos.
import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { RecommendationService } from '../recommendation.service';
import { Subscription } from 'rxjs';

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
  @Input() movie: any;
  movies: Movie[] = [];
  recommendedMovies: Movie[] = [];
  isLoading: boolean = true;
  subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private recommendationService: RecommendationService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.loadMovies();
    this.movies = this.movieService.getMovies();

    this.subscription.add(
      this.recommendationService.recommendedMovies$.subscribe(recommendedMovies => {
        this.recommendedMovies = recommendedMovies;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async loadMovies() {
    this.isLoading = true;
    try {
      this.movies = await this.movieService.getMoviesAsync();
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      this.isLoading = false;
    }
  }

  toggleFavorite(id: number): void {
    this.movieService.toggleFavorite(id);
    this.movies = this.movieService.getMovies();
  }
}




