import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { RecommendationService } from '../recommendation.service';



interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  favorite: boolean;
  poster: string;
  trailerUrl: string;
  banner?: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

// Funciones para mostrar banner de las películas y reproducción del trailer. Uso de rutas y servicio de películas.
export class MovieDetailComponent implements OnInit {
  movie: Movie | any ;

  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private recommendationService: RecommendationService,
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
    
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.movieService.getMovieById(Number(movieId));
      if (this.movie) {
        this.movieService.selectMovieGenre(this.movie.genre);
        this.recommendationService.updateRecommendationsByGenre(this.movie.genre);
      }
    }
  }

  getMovieDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);
  }

  playTrailer(): void {
    window.open(this.movie?.trailerUrl, '_blank');
  }

  getBannerUrl(): string {
    return this.movie?.banner || this.movie?.poster || '';
  }

}