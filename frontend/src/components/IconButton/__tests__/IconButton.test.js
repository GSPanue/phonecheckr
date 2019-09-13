import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../helpers/test/enzyme';

import IconButton from '../IconButton';
import { Wrapper } from '../styles';

describe('Component: IconButton', () => {
  const minProps = {
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<IconButton {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<IconButton {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<IconButton {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children', () => {
    const theme = {
      ripple: {
        primaryColor: '#ffffff'
      }
    };

    const wrapper = mountWithTheme(<IconButton {...minProps} />, theme);

    expect(wrapper.find('IconButton').props().children).toBeDefined();
  });
});
