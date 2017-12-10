

import React, { Component } from 'react'

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="searchResults">
        <ul>
          {
            this.props.list !== undefined ?
              this.props.list.map((item) => {
                return (
                  <li key={item.id}>{item.title}</li>
                )
              })
              : 'no results'
          }
        </ul>
      </div>
    )
  }
}

export default SearchResults
