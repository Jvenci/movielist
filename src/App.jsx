/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import MovieListEntry from './MovieListEntry.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      search: ''
    }
    this.handleWatchedToggle = this.handleMovieListEntry.bind(this)
  }

  handleMovieListEntry (e, value) {
    e.preventDefault()
    if (this.state.movies.length === 0) {
      this.setState({ movies: [{ title: value, hasWatched: false }] })
    }
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title === value) {
        alert('That movie is already on the list!')
        break
      } else {
        const newState = [...this.state.movies, { title: value, hasWatched: false }]
        this.setState({ movies: newState })
      }
    }
  }

  handleSubmit (e, value) {
    e.preventDefault()
    this.setState({ search: value })
  }

  handleWatchedToggle (key) {
    const newState = [...this.state.movies]
    newState[key].hasWatched ? newState[key].hasWatched = false : newState[key].hasWatched = true
    this.setState({ movies: newState })
  }
  render () {
    return (
      <div>
        <MovieListEntry handleMovieListEntry={this.handleMovieListEntry.bind(this)} />
        <Search handleSubmit={this.handleSubmit.bind(this)} />
        <MovieList movies={this.state} handleWatchedToggle={this.handleWatchedToggle} />
      </div>
    )
  }
};
export default App

ReactDOM.render(<App />, document.getElementById('app'))
