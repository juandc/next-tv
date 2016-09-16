import React from 'react';

function MovieImage({ title, picture }) {
  return (
    <figure className="Movie-avatar">
      <img
        width="170"
        title={title}
        alt={title}
        src={picture}
      />
    </figure>
  );
}

export default MovieImage;
