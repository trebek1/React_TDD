// Need react 
import React from 'react'; 

// only render outer jsx but not inner content (shallow)
import { shallow } from 'enzyme'; 

import App from './App'; 

const app = shallow(<App />);

it("renders correctly", () => {
	// Snapshot keeps a history of each change to component that is made 
	expect(app).toMatchSnapshot();
});

it("initializes the `state` with an empty list of gifts", ()=> {
	expect(app.state().gifts).toEqual([]); 
});