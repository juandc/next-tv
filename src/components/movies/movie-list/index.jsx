import React from 'react';
import MovieItem from '../movie-item/index.jsx';

function MovieList({ list }) {
  return (
    <ul className="Movies"> {
      list.map((res) => {
        const movie = res.show ? res.show : res;
        return <MovieItem key={movie.id} movie={movie} />;
      })
    } </ul>
  );
}

export default MovieList;
