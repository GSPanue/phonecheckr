import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../helpers/test/enzyme';

import Range from '../Range';
import { Wrapper, StyledText } from '../styles';

describe('Component: Range', () => {
  const minProps = {
    from: 0,
    to: 1
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Range {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Range {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render two StyledText components', () => {
    const wrapper = shallow(<Range {...minProps} />);

    expect(wrapper.find(StyledText)).toHaveLength(2);
  });

  it('should render two Spans', () => {
    const wrapper = shallow(<Range {...minProps} />);

    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('should have props for from and to', () => {
    const theme = {
      text: {
        secondaryColour: 'red'
      }
    };

    const wrapper = mountWithTheme(<Range {...minProps} />, theme);

    expect(wrapper.find('Range').props().from).toBeDefined();
    expect(wrapper.find('Range').props().to).toBeDefined();
  });
});
