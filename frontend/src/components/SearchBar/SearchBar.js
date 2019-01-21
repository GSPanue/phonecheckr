import React, { Component } from 'react';

import { Wrapper, StyledInput } from './styles';
import SearchButton from '../SearchButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  /**
   * Updates the value property in state with the value of the input field.
   *
   * @param {object} event - The event.
   * @param {object} event.target - The target element that triggered the event.
   * @param {string} event.target.value - The value of the target element that triggered the event.
   *
   * @returns {void}
   */
  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <Wrapper>
        <StyledInput
          placeholder="Search for product..."
          value={value}
          onChange={this.handleChange}
          autoFocus
        />
        <SearchButton />
      </Wrapper>
    );
  }
}

export default SearchBar;
