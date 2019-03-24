/* eslint-disable no-unused-vars */
import React from 'react'

const MovieListEntry = (props) => {
  let movies = props.movies.movies
  let userSearch = props.movies.search
  const movieList = movies.map((movie, index) => {
    if (userSearch) {
      return movie.title.includes(userSearch) ? <div className="movie" key={index}>{movie.title}</div> : []
    } else {
      return <div className="movie" key={index}>{movie.title}</div>
    }
  })

  return <div className="movieList">{movieList}</div>
}

export default MovieListEntry
