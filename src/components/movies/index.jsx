import React, { Component } from 'react'
import MovieList from './movie-list/index.jsx'

class Movies extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      search: 'robot',
      url: 'http://api.tvmaze.com/search/shows?q=robot',
      // url: 'http://api.tvmaze.com/shows',
    }
  }
  componentWillMount () {
    this.setState({ url: `http://api.tvmaze.com/search/shows?q=${this.state.search}` })
    fetch(this.state.url)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.setState({ movies: res })
      })
  }
  render () {
    if (!this.state.movies.length) {
      return <div className="container">
        <p className="">Cargando peliculas...</p>
        <figure className="ChargingImg">
          <img src="img/load2.gif" />
        </figure>
      </div>
    }
    return ( <div className="container">
      <MovieList list={ this.state.movies } />
    </div> )
  }
}

export default Movies
