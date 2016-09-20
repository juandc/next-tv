import React from 'react';

function SearchInput({ defaultValue, onChange }) {
  return (
    <div style={{ position: 'absolute', top: '90px' }}>
      <label htmlFor="search"> Search movies: </label>
      <input type="text" name="search" defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
}

export default SearchInput;
