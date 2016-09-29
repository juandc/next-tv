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
    this.fetchMovies()
  }
  handleChangeInForm(e) {
    // this.searchMovies(this.refs)
    console.log(this.refs)
    return false
  }
  handleChange(e) {
    if (e.key === 'Enter') {
      this.searchMovies(e.target.value)
    }
  }
  searchMovies(s) {
    this.setState(
      {search: s},
      function () { this.fetchMovies(); });
  }
  fetchMovies() {
    const search = this.state.search
    let api = this.state.full

    if (search !== '' && search !== ' ') {
      api = `${this.state.url}${this.state.search}`
    } else { api = this.state.full }

    console.log(
      `Api: ${api} \n
      Url: ${this.state.url} \n
      Search state word is: ${this.state.search == ' ' ? 'space' : this.state.search }`
    );

    fetch(api)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.setState({ movies: res });
      });
  }
  render() {
    let msg = this.state.search !== '' && this.state.search !== ' ' ? this.state.search : '...';
    if (!this.state.movies.length) {
      return (
        <div className="container">
          <div className="SearchForm SearchForm--charging">
           <label htmlFor="search">Search movies: </label>
           <input type="text" name="search" onKeyPress={this.handleChange} placeholder="robot" defaultValue={this.state.search} />
          </div>
          <div className="ChargingContainer" id="chargingContainer">
            <p className="ChargingContainer-span">{translate.message('charging')}</p>
            <figure className="ChargingContainer-img">
              <img src="img/load2.gif" alt="Charging films" />
            </figure>
          </div>
          { setTimeout(function chargeContainer() {
            if (document.getElementById('chargingContainer')) {
              const chargingContainer = document.getElementById('chargingContainer');
              chargingContainer.innerHTML = `<div>
                <div class="ChargingContainer">
                  <p class="ChargingContainer-span">${translate.message('notFilms')}</p>
                  <figure class="ChargingContainer-img">
                    <img height="200" src="http://media0.giphy.com/media/l41lGxxaSgnMk7rIA/giphy.gif" />
                  </figure>
                </div>
              </div>`;
            }
          }, 10000)};
        </div>
      );
    }
    return (
      <div className="container">
        <div className="SearchBox">
          <h4>
            {translate.message('search')}
            <span className="searchWord">
              {msg.toUpperCase()}
            </span>
          </h4>
        </div>
        <MovieList list={this.state.movies} />
        <div className="SearchForm">
         <label htmlFor="search">Search movies: </label>
         <input type="text" defaultValue={this.state.search} name="search" id="search-input" onKeyPress={this.handleChange} ref="inputSearch" placeholder="robot" />
        </div>
      </div>
    );
  }
}

export default Movies;
