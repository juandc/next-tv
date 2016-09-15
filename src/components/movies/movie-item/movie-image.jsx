import React from 'react'

class MovieImage extends React.Component {
  render () {
    return (
      <figure className="Movie-avatar">
        <img width="100" title={ this.props.title } src={ this.props.picture } />
      </figure>
    )
  }
}

export default MovieImage