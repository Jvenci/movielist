import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle:''
    };
  }

  handleSearchText(e) {
    this.setState({movieTitle:e.target.value});
  }

  handleSubmit(e) {
    
  }

  render() {
    return (
      <div className="search">
        <form>
        <input type="form" placeholder="Movie Title" onChange={(e) => this.handleSearchText(e)}></input>
        <button type="submit">GO!</button>
        </form>
      </div>
    )
  }
}

export default Search;