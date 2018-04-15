import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {

  it('renders without crashing', () => {
       const renderedComponent = shallow(<App />)
        expect(renderedComponent).toBeDefined()
    expect(true).toEqual(true)
  });
})
