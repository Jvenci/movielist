import React from "react";
import ReactDOM from "react-dom";
import MovieListEntry from "./MovieListEntry.jsx"
import Search from "./Search.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movies : [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }
  render () {
  return (
    <div>
      <Search />
      <MovieListEntry movies={this.state.movies} />
    </div>
  );
  }
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));