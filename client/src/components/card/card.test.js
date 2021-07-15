import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import CardList from './CardList';

it('Should render cards list', () => {
  const wrapper = shallow(<Card />);
  const cardList = wrapper.find(CardList);
  expect(cardList.exists()).toBe(true);
});
