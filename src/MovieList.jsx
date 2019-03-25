/* eslint-disable no-unused-vars */
import React from 'react'

const MovieList = (props) => {
  let movies = props.movies.movies
  let userSearch = props.movies.search
  const movieList = movies.map((movie, index) => {
    if (userSearch) {
      return movie.title.includes(userSearch) ? <div className="movie" key={index}>{movie.title}</div> : []
    } else {
      return (
        <div className="movie" key={index} >
          <div>{movie.title}</div>
          <input className="checkbox" type="Checkbox" id={index} onClick={(e) => this.props.handleWatchedToggle(e, index)}></input>
          <label>Watched</label>
        </div>
      )
    }
  })

  return <div className="movieList">{movieList}</div>
}

export default MovieList
