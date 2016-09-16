import React from 'react'
import MovieItem from '../movie-item/index.jsx'

class MovieList extends React.Component {
  render () {
    return (
      <ul className="Movies"> {
        this.props.list.map((res) => {
          const movie = res.show ? res.show : res
          return <MovieItem key={ movie.id } movie={ movie } />
        })
      } </ul>
    )
  }
}

export default MovieList