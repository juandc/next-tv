import React from 'react';
import MovieList from './movie-list/index.jsx';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: 'robot',
      full: 'https://api.tvmaze.com/shows',
      url: 'https://api.tvmaze.com/search/shows?q=',
    };
  }
  componentWillMount() {
    const api = this.state.search !== '' ? `${this.state.url}${this.state.search}` : this.state.full;
    console.log(`Api: ${api} \n Url: ${this.state.url} \n Search word is: ${this.state.search}`);
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ movies: res });
      });
  }
  render() {
    if (!this.state.movies.length) {
      return (
        <div className="container" id="chargingContainer">
          <div className="ChargingContainer">
            <p className="ChargingContainer-span">Cargando peliculas...</p>
            <figure className="ChargingContainer-img">
              <img src="img/load2.gif" alt="Charging films" />
            </figure>
          </div>
          {
            setInterval(function chargeContainer() {
              if (document.getElementById('chargingContainer')) {
                const chargingContainer = document.getElementById('chargingContainer');
                chargingContainer.innerHTML = `<div class="ChargingContainer">
                  <p class="ChargingContainer-span">Lo sentimos... no hay peliculas</p>
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
          }}
        >
          <h4 style={{ fontFamily: 'Open Sans', color: '#fff', fontSize: '20px' }} >
            Resultados para:
            <span style={{ fontFamily: 'Dosis', textDecoration: 'underline', paddingLeft: '5px' }}>
              { this.state.search.toUpperCase() }
            </span>
          </h4>
        </div>
        <MovieList list={this.state.movies} />
      </div>
    );
  }
}

export default Movies;
