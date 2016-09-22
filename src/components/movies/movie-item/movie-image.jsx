import React from 'react';

function MovieImage({ title, picture }) {
  return (
    <figure className="Movie-avatar">
      <img
        width="300"
        title={title}
        alt={title}
        src={picture}
      />
    </figure>
  );
}

export default MovieImage;
