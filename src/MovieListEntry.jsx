import React from 'react';

const MovieListEntry = (props) => {
  console.log(props)
  let movies = props.movies
  const movieList = movies.map((movie, index) => 
    <div className="movie" key={index}>{movie.title}</div>
  );

return <div className="movieList">{movieList}</div>
  
}

export default MovieListEntry;