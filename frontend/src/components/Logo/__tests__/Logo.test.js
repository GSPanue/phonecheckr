import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../helpers/test/enzyme';

import Logo from '../Logo';
import { Wrapper, StyledText } from '../styles';

describe('Component: Logo', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render two StyledText components', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper.find(StyledText)).toHaveLength(2);
  });

  it('should have props for large', () => {
    const theme = {
      logo: {
        large: '30px',
        medium: '20px',
        primaryWeight: '100',
        secondaryWeight: '200',
        primaryColor: 'red',
        secondaryColor: 'green'
      }
    };

    const wrapper = mountWithTheme(<Logo large />, theme);

    expect(wrapper.find('Logo').props().large).toBeDefined();
  });
});
