import { Injectable } from '@angular/core';

// Definición de la interfaz con sus tipos de datos como platilla para el array de películas
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

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { 
      id: 1, 
      title: 'Inception', 
      genre: 'Action', 
      description: 'A mind-bending thriller', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/mJfTycNg8PxjvxzpnKnzAAG7RIP.jpg',
      trailerUrl: 'https://youtu.be/YoHD9XEInc0',
      banner: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg'
    },
    { 
      id: 2, 
      title: 'Toy Story', 
      genre: 'Comedy', 
      description: 'A story about toys coming to life', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/jvn7wy3RSNEXnFSXLpH2of2LcV6.jpg',
      trailerUrl: 'https://youtu.be/tN1A2mVnrOM',
      banner: 'https://image.tmdb.org/t/p/original/8AqWECiUHnz1Crj69uB9vhiK9Le.jpg'
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      genre: 'Action', 
      description: 'Batman faces the Joker', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/1PEFfYM4PV80dDqqO7jkCBdjbZa.jpg',
      trailerUrl: 'https://youtu.be/kmJLuwP3MbY',
      banner: 'https://image.tmdb.org/t/p/original/n9onPKX3ne6j6nd36KPjySCbdRo.jpg'
    },
    { 
      id: 4, 
      title: 'Forrest Gump', 
      genre: 'Drama', 
      description: 'The story of a man with a low IQ', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/azV6hV99lYkdhydsQbJCI6FqMl4.jpg',
      trailerUrl: 'https://youtu.be/bLvqoHBptjg',
      banner: 'https://image.tmdb.org/t/p/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg' 
    },
    { 
      id: 5, 
      title: 'The Matrix', 
      genre: 'Sci-Fi', 
      description: 'A hacker discovers reality is a simulation', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg',
      trailerUrl: 'https://youtu.be/nUEQNVV3Gfs',
      banner: 'https://image.tmdb.org/t/p/original/6jegmM3iwxjvdGBXaijS6nIPWm6.jpg' 
    },
    { 
      id: 6, 
      title: 'Finding Nemo', 
      genre: 'Animation', 
      description: 'A fish searches for his lost son', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/np1RaorjphJCenBPh98qTqeNZdx.jpg',
      trailerUrl: 'https://youtu.be/ba4TwyaNhSQ',
      banner: 'https://image.tmdb.org/t/p/original/5cqqWEhTewZtPqjtwonXFfeHBWq.jpg' 
    },
    { 
      id: 7, 
      title: 'Gladiator', 
      genre: 'Action', 
      description: 'A Roman general seeks revenge', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/3ioy4m1Zq84tgYRAv5QTKs6D44t.jpg',
      trailerUrl: 'https://youtu.be/P5ieIbInFpg',
      banner: 'https://image.tmdb.org/t/p/original/3ZVEtQxVPpEp5LNpAULDcxadTU3.jpg'
    },
    { 
      id: 8, 
      title: 'The Godfather', 
      genre: 'Crime', 
      description: 'The story of a powerful Italian-American crime family', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg',
      trailerUrl: 'https://youtu.be/iOyQx7MXaz0',
      banner: 'https://image.tmdb.org/t/p/original/ra8AmdbM29msIPQjToOT60LR63R.jpg'
    },
    { 
      id: 9, 
      title: 'Shrek', 
      genre: 'Comedy', 
      description: 'An ogre sets out to rescue a princess', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/jTQONM7jt1yv2lL972TtmWO0UIZ.jpg',
      trailerUrl: 'https://youtu.be/enHYcGQAB9w',
      banner: 'https://image.tmdb.org/t/p/original/w0eKUOEog2ImtktCHAMUZws8qif.jpg'
    },
    { 
      id: 10, 
      title: 'Titanic', 
      genre: 'Drama', 
      description: 'A love story on the ill-fated ship', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/hN6VpNFlU2FeqNit9YtBx52Pkap.jpg',
      trailerUrl: 'https://youtu.be/tA_qMdzvCvk',
      banner: 'https://image.tmdb.org/t/p/original/wOFY2xA3D3VHi3G6DPtrXXhPrqQ.jpg'
    },
    { id: 11, 
      title: 'Mad Max: Fury Road', 
      genre: 'Action', 
      description: 'A woman rebels against a tyrannical ruler', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
      trailerUrl: 'https://youtu.be/akX3Is3qBpw',
      banner: 'https://image.tmdb.org/t/p/original/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg'
    },
    { id: 12, 
      title: 'Superbad', 
      genre: 'Comedy', 
      description: 'Two high school friends plan a big party', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/hx6sr6iMpqy2uxs7Gl6Kdq7jwLH.jpg',
      trailerUrl: 'https://youtu.be/q3UFV1in5Qk',
      banner: 'https://image.tmdb.org/t/p/original/hEUTKEweUKgQ7R25S768VXidyyq.jpg'
    },
    { id: 13, 
      title: 'The Shawshank Redemption', 
      genre: 'Drama', 
      description: 'Two imprisoned men bond over a number of years', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      trailerUrl: 'https://youtu.be/xB4nJg0fyE0',
      banner: 'https://image.tmdb.org/t/p/original/v8xVDqt8uCul3c3mgx4VpGCwxJC.jpg'
    },
    { id: 14, 
      title: 'Guardians of the Galaxy', 
      genre: 'Action', 
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/lGR9yjcPctrIxNrnGBiXlEbM6nT.jpg',
      trailerUrl: 'https://youtu.be/b7yOuhI1dzU',
      banner: 'https://image.tmdb.org/t/p/original/i34ijHY5hr52uYcKZ48wq7K6yUs.jpg'
    },
    { id: 15, 
      title: 'The Big Lebowski', 
      genre: 'Comedy', 
      description: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug', 
      favorite: true, 
      poster: 'https://image.tmdb.org/t/p/original/EJFkJD9BH400jfzKz3W5xLYHQa.jpg',
      trailerUrl: 'https://youtu.be/cd-go0oBF4Y',
      banner: 'https://image.tmdb.org/t/p/original/nevS6wjzCxZESvmjJZqdyZ3RNQ6.jpg'
    }
  ];

  // Funciones para administrar o filtrar el listado de las películas
  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getRecommendedMovies(): Movie[] {
    return this.movies.filter(movie => movie.favorite);
  }

  getMoviesByGenre(genre: string): Movie[] {
    return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }

  toggleFavorite(id: number): void {
    const movie = this.movies.find(movie => movie.id === id);
    if (movie) {
      movie.favorite = !movie.favorite;
    }
  }

  getFavoriteMovies(): Movie[] {
    return this.movies.filter(movie => movie.favorite);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}




