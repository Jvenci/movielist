import React from 'react'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieTitle: ''
    }
  }

  handleSearchText (e) {
    this.setState({ movieTitle: e.target.value })
  }

  render () {
    return (
      <div className="search">
        <form>
          <input type="form" placeholder="Movie Title" onChange={(e) => this.handleSearchText(e)}></input>
          <button type="submit" onClick={(e) => this.props.handleSubmit(e, this.state.movieTitle)}>GO!</button>
        </form>
      </div>
    )
  }
}

export default Search
