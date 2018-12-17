import React from 'react';
import './SearchBar.css';

import Business from '../Business/Business';


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.getSortByClass = this.getSortByClass.bind(this);
    this.renderSortByOptions = this.renderSortByOptions.bind(this);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }

    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();

    const searchYelp = this.props.searchYelp;
    const term = this.state.term;
    const location = this.state.location;
    const sortBy = this.state.sortBy;

    searchYelp(term, location, sortBy);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      let className = this.getSortByClass(sortByOptionValue);
      return (
        <li
          key={sortByOptionValue}
          className={className}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}


export default SearchBar;