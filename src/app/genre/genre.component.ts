// Componente para recuperar películas por género y pintarlas en cada vista
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  movies: Movie[] = [];
  genre: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      this.movies = this.movieService.getMoviesByGenre(this.genre);
    });
  }

  toggleFavorite(id: number): void {
    this.movieService.toggleFavorite(id);
  }
}
