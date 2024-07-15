export interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    favorite: boolean;
    poster: string;
    trailerUrl?: string;
    banner?: string;
}
