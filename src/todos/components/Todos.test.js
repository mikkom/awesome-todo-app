import React from 'react';
import { shallow } from 'enzyme';
import { Todos } from './Todos';

const todos = [
  {
    id: 1,
    name: 'write tests',
    done: true
  },
  {
    id: 2,
    name: 'write more tests',
    done: false
  },
  {
    id: 3,
    name: 'enjoy',
    done: false
  },
]

it('renders without crashing', () => {
  shallow(<Todos todos={todos} />);
});

it('matches snapshot', () => {
  expect(shallow(<Todos todos={todos} />)).toMatchSnapshot();
});
