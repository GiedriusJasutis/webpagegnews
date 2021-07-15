import React from 'react';
import App from '.';
import { shallow } from 'enzyme';
import Header from '../header';
import Aside from '../aside';
import Search from '../search';

describe('rendering components', () => {
  it('renders App component component without crashing', () => {
    shallow(<App />);
  });

  it('renders header component without crashing', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true);
  });

  it('renders aside component without crashing', () => {
    const wrapper = shallow(<App />);
    const aside = wrapper.find(Aside);
    expect(aside.exists()).toBe(true);
  });

  it('renders search component without crashing', () => {
    const wrapper = shallow(<App />);
    const search = wrapper.find(Search);
    expect(search.exists()).toBe(true);
  });
});
