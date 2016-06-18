import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from './../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    
  }
  // updates searchTerm to be the value of the input
  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // call Action Creator with searchTerm
    this.props.fetchWeather(this.state.searchTerm);
    // clear the search field which will rerender the component
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input 
          placeholder="Choose a city for your five-day Forecast!"
          className="form-control"
          value={ this.state.searchTerm }
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);