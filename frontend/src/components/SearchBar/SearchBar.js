import React, { Component } from 'react';

import { Wrapper } from './styles';
import Input from '../Input';
import SearchButton from '../SearchButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange({ target: { value } }) {
    this.setState({
      value
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <Wrapper>
        <Input placeholder="Search for product..." onChange={this.handleChange} />
        <SearchButton />
      </Wrapper>
    );
  }
}

export default SearchBar;
