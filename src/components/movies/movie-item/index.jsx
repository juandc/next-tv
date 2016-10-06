import html2markdown from 'html2markdown';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import React from 'react';
import MovieImage from './movie-image.jsx';

function MovieItem({ movie }) {
  const pic = movie.image
    ? JSON.stringify(movie.image.medium).split('"').join('')
    : 'http://tvmazecdn.com/images/no-img/no-img-portrait-text.png';
  const styles = {
    backgroundImage: 'url(' + pic + ')',
  }
  const md = new Remarkable();
  md.renderer = new RemarkableReactRenderer();
  const des = md.render(html2markdown(movie.summary));

  return (
    <li className="Movie" >
      <a href={'/movies/' + movie.id}>
        <MovieImage title={movie.name} picture={pic} />
      </a>
      <div id={`modal${movie.id}`} className="modal modal-fixed-footer">
        <div className="modal-content" style={styles}>
          <div className="modal-cont">
            <h2>{movie.name}</h2>
            <div>{des}</div>
          </div>
        </div>
        <div className="modal-footer">
          <a href={movie.url} target="_banck" className="modal-action modal-close btn">Ver pelicula</a>
        </div>
      </div>
    </li>
  );
}

export default MovieItem;

// <div className="u-movieModal hidden">
  // <div className="container">
  //   <img className="Movie-img" src={pic} alt={movie.name} />
  //   <div className="Movie-body">
  //     <h4 className="Movie-title" >{movie.name}</h4>
  //     <span className="Movie-span Movie-span--type">{movie.type}</span>
  //     <article className="Movie-span Movie-span--description">{des}</article>
  //     <a
  //       className="Movie-span Movie-span--link"
  //       target="_blanck"
  //       href={movie.url}
  //     >
  //       Vér la pelicula
  //     </a>
  //   </div>
  // </div>
// </div>
