import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';
import { Nav } from '../Nav/Nav';

describe('LandingPage', () => {
  it('Should render', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('div.landing_page__container').length).toEqual(1);
  });

  it('Should render the navbar', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(Nav).length).toEqual(1);
  });
});
