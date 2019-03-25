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
  }

  handleMovieListEntry (e, value) {
    e.preventDefault()
    if (this.state.movies.length === 0) {
      this.setState({ movies: [{ title: value }] })
    } else {
      for (var i = 0; i < this.state.movies.length; i++) {
        if (this.state.movies[i].title === value) {
          alert('That movie is already on the list!')
        } else {
          const newState = [...this.state.movies, { title: value }]
          this.setState({ movies: newState })
        }
      }
    }
  }

  handleSubmit (e, value) {
    e.preventDefault()
    // console.log(e.target.value)
    this.setState({ search: value })
  }
  render () {
    return (
      <div>
        <MovieListEntry handleMovieListEntry={this.handleMovieListEntry.bind(this)} />
        <Search handleSubmit={this.handleSubmit.bind(this)} />
        <MovieList movies={this.state} />
      </div>
    )
  }
};
export default App

ReactDOM.render(<App />, document.getElementById('app'))
