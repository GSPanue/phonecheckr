import React from 'react';
import { shallow } from 'enzyme';

import { mountWithRouter } from '../../../helpers/test';

import Link from '../Link';
import { Wrapper } from '../styles';

describe('Component: Link', () => {
  const minProps = {
    children: <div />,
    to: '/404'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Link {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });
  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Link {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Link {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children and to', () => {
    const wrapper = mountWithRouter(<Link {...minProps} />);

    expect(wrapper.find('Link').first().props().children).toBeDefined();
    expect(wrapper.find('Link').first().props().to).toBeDefined();
  });
});
