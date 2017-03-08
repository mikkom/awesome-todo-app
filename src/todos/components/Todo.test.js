import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

const todo = {
  id: 1,
  name: 'write tests',
  done: false
}

it('renders without crashing', () => {
  shallow(<Todo todo={todo} onToggleTodo={() => {}} onRemoveTodo={() => {}} />);
});

it('should have two buttons', () => {
  const wrapper = shallow(<Todo todo={todo} onToggleTodo={() => {}} onRemoveTodo={() => {}} />);
  expect(wrapper.find('button').length).toEqual(2);
});
