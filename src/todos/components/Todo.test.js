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

it('calls onToggleTodo on ok button click', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Todo todo={todo} onToggleTodo={fn} onRemoveTodo={() => {}} />);
  wrapper.find('.btn-success').simulate('click');
  expect(fn).toHaveBeenCalled();
});
