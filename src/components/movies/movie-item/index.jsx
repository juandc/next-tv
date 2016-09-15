import React from 'react'
import MovieImage from './movie-image.jsx'
import html2markdown from 'html2markdown'
import Remarkable from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react'
// import MarkdownIt from 'markdown-it'

class MovieItem extends React.Component {
  render () {
    const movie = this.props.movie
    const pic = movie.image ? JSON.stringify(movie.image["medium"]).replace('"', '').replace('"', '') : 'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png'
    const md = new Remarkable()
    md.renderer = new RemarkableReactRenderer()
    const des = md.render(html2markdown(movie.summary))
    return (
      <li className="Movie">
        <MovieImage title={ movie.name } picture={ pic } />
        <div className="u-movieModal">
          <h4 className="Movie-title" >{ movie.name }</h4>
          <span className="Movie-span Movie-span--type">{ movie.type }</span>
          <article className="Movie-span Movie-span--description">{ des }</article>
          <a className="Movie-span Movie-span--link" target="_blanck" href={ movie.url }>Vér la pelicula</a>
        </div>
      </li>
    )
  }
}

export default MovieItem
