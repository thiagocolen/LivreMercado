

import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSearchSubmit(event)
  }
  
  handleChange(event) {
    this.props.handleSearchQuery(event)
  }


  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input type="text" onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchBar
