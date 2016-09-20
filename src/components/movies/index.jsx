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
    // this.searchMovies = this.searchMovies.bind(this);
  }
  componentWillMount() {
    searchMovies(this)
  }
  handleChange(e) {
    this.setState({search: e.target.value});
    searchMovies(this)
  }
  render() {
    if (!this.state.movies.length) {
      return (
        <div className="container" id="chargingContainer">
          <div className="ChargingContainer">
            <p className="ChargingContainer-span">{translate.message('charging')}</p>
            <figure className="ChargingContainer-img">
              <img src="img/load2.gif" alt="Charging films" />
            </figure>
          </div>
          {
            setInterval(function chargeContainer() {
              if (document.getElementById('chargingContainer')) {
                const chargingContainer = document.getElementById('chargingContainer');
                chargingContainer.innerHTML = `<div class="ChargingContainer">
                  <p class="ChargingContainer-span">${translate.message.notFilms}</p>
                  <figure class="ChargingContainer-img">
                    <img height="200" src="http://media0.giphy.com/media/l41lGxxaSgnMk7rIA/giphy.gif" />
                  </figure>
                </div>`;
              }
            }, 4000)
          };
        </div>
      );
    }
    return (
      <div className="container">
        { (() => {
          if (this.state.search) {
            return (
              <div
                style={{
                  background: '#22A7F0',
                  position: 'absolute',
                  left: '10%',
                  top: '82px',
                  width: '80%',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  fontFamily: 'Open Sans', color: '#fff', fontSize: '20px'
                }}
              >
                <h4>
                  {translate.message('search')}
                  <span style={{ fontFamily: 'Dosis', textDecoration: 'underline', paddingLeft: '5px' }}>
                    {this.state.search.toUpperCase()}
                  </span>
                </h4>
              </div>
            )
          }
        })() }
        <MovieList list={this.state.movies} />
        <div style={{ position: 'absolute', top: '90px' }}>
          <label htmlFor="search"> Search movies: </label>
          <input type="text" name="search" defaultValue={this.state.search} onChange={this.handleChange} />
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
