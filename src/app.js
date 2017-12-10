

import React, { Component } from 'react'
import $ from 'jquery'
import SearchBar from './components/searchBar.js'
import SearchResults from './components/searchResults.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchQuery: ''
    }
  }

  componentWillMount() {
    $.ajax({
      url: 'https://api.mercadolibre.com/sites/MLA/search?q=programadores',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ searchResult: data.results })
        console.log('this.state:', this.state)
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
      }
    })

  }

  handleSearchQuery(event) {
    this.setState({ searchQuery: event.target.value })
  }

  handleSearchSubmit(event) {
    console.log(this.state.searchQuery)
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSearchSubmit={this.handleSearchSubmit.bind(this)}
          handleSearchQuery={this.handleSearchQuery.bind(this)} />
        <SearchResults list={this.state.searchResult} />
      </div>
    )
  }
}

export default App



