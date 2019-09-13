import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../helpers/test/enzyme';

import ProgressBar from '../ProgressBar';
import { Wrapper, StyledLinearProgress } from '../styles';

describe('Component: ProgressBar', () => {
  const minProps = {
    hide: false
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<ProgressBar {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<ProgressBar {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a StyledLinearProgress component', () => {
    const wrapper = shallow(<ProgressBar {...minProps} />);

    expect(wrapper.find(StyledLinearProgress)).toHaveLength(1);
  });

  it('should have props for hide', () => {
    const theme = {
      progressBar: {
        primaryColor: 'red'
      }
    };

    const wrapper = mountWithTheme(<ProgressBar {...minProps} />, theme);

    expect(wrapper.find('ProgressBar').props().hide).toBeDefined();
  });
});
