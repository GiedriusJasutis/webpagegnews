import React from 'react';
import { shallow } from 'enzyme';
import Aside from './index';

it('should render search keyword', () => {
  expect(true).toBe(true);
  const wrapper = shallow(<Aside />);
  const el = wrapper.find('h5#search-keyword');
  const result = el.text();
  expect(result).toBe('SearchKeyword');
});

it('should render details keyword', () => {
  expect(true).toBe(true);
  const wrapper = shallow(<Aside />);
  const el = wrapper.find('h5#details');
  const result = el.text();
  expect(result).toBe('Details');
});
