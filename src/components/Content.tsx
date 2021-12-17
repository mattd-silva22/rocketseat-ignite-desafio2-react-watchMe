import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenreTitle : string;
  movieList :  MovieProps[]
}


export function Content(props:ContentProps) {
  // Complete aqui


    return (
      <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movieList.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

    )
}