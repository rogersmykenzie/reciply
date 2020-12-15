import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  it('Should render Nav', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('nav.nav__container').length).toEqual(1);
  });
});
