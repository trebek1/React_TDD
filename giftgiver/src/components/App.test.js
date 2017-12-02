// Need react 
import React from 'react'; 

// only render outer jsx but not inner content (shallow)
import { shallow } from 'enzyme'; 

import Adapter from 'enzyme-adapter-react-16';

import App from './App'; 

const app = shallow(<App />);

it("renders correctly", () => {
	// Snapshot keeps a history of each change to component that is made 
	expect(app).toMatchSnapshot();
});