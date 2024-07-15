import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private recommendedMoviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public recommendedMovies$: Observable<Movie[]> = this.recommendedMoviesSubject.asObservable();

  constructor(private movieService: MovieService) {}

  updateRecommendationsByGenre(genre: string): void {
    const movies = this.movieService.getMovies();
    const recommendedMovies = movies.filter(movie => movie.genre === genre);
    this.recommendedMoviesSubject.next(recommendedMovies);
  }
}
