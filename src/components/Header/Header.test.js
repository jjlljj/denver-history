import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('renders without crashing', () => {
    const renderedComponent = shallow(<Header />)
    expect(renderedComponent).toBeDefined()
  });
})
