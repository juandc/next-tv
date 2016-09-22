import React from 'react';
import MovieList from './movie-list/index.jsx';
import SearchInput from './search-input/index.jsx';

const translate = require('../translate');

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: '',
      full: 'http://api.tvmaze.com/shows',
      url: 'http://api.tvmaze.com/search/shows?q=',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    searchMovies(this)
  }
  handleChange(e) {
    if (e.key === 'Enter') {
      const search = e.target.value
      this.setState({search: e.target.value});
      console.log(this.state.search)
      searchMovies(this);
      console.log(this.state.search)
    }
  }
  render() {
    let msg = this.state.search ? this.state.search : '...';
    if (!this.state.movies.length) {
      return (
        <div className="container">
          <div className="ChargingContainer" id="chargingContainer">
            <p className="ChargingContainer-span">{translate.message('charging')}</p>
            <figure className="ChargingContainer-img">
              <img src="img/load2.gif" alt="Charging films" />
            </figure>
          </div>
          {
            setTimeout(function chargeContainer() {
              if (document.getElementById('chargingContainer')) {
                const chargingContainer = document.getElementById('chargingContainer');
                chargingContainer.innerHTML = `<div class="ChargingContainer">
                  <p class="ChargingContainer-span">${translate.message('notFilms')}</p>
                  <figure class="ChargingContainer-img">
                    <img height="200" src="http://media0.giphy.com/media/l41lGxxaSgnMk7rIA/giphy.gif" />
                  </figure>
                </div>`;
              }
            }, 4000)
          };
          <div className="SearchForm" >
            <label htmlFor="search">Search movies: </label>
            <input type="text" name="search" id="search-input" defaultValue={this.state.search} onKeyPress={this.handleChange} />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="SearchBox">
          <h4>
            {translate.message('search')}
            <span className="searchWorld">
              {msg.toUpperCase()}
            </span>
          </h4>
        </div>
        <MovieList list={this.state.movies} />
        <div className="SearchForm" >
         <label htmlFor="search">Search movies: </label>
         <input type="text" name="search" id="search-input" defaultValue={this.state.search} onKeyPress={this.handleChange} />
         <button type="submit">Search</button>
        </div>
      </div>
    );
  }
}

function searchMovies (obj) {
  const api = obj.state.search !== '' ? `${obj.state.url}${obj.state.search}` : obj.state.full;
  console.log(`Api: ${api} \n Url: ${obj.state.url} \n Search word is: ${obj.state.search}`);
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      obj.setState({ movies: res });
    });
}

export default Movies;
