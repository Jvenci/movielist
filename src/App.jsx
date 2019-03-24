/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import MovieListEntry from './MovieListEntry.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ],
      search: ''
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
        <Search handleSubmit={this.handleSubmit.bind(this)} />
        <MovieListEntry movies={this.state} />
      </div>
    )
  }
};
export default App

ReactDOM.render(<App />, document.getElementById('app'))
