import React from 'react'

class MovieListEntry extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieTitle: ''
    }
  }
  handleTextChange (e) {
    this.setState({ movieTitle: e.target.value })
  }
  render () {
    return (
      <div className="movieListEntry">
        <form>
          <input type="form" placeholder="Add movie title here" onChange={e => this.handleTextChange(e)}></input>
          <button type="submit" onClick={(e) => this.props.handleMovieListEntry(e, this.state.movieTitle)}>Add</button>
        </form>
      </div>
    )
  }
}

export default MovieListEntry
