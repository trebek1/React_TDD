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

it("adds a new `state` when clicking the `add gift` button", () =>{
	// find child nodes with jsx tags or className
	app.find('.btn-add').simulate('click'); 
	expect(app.state().gifts).toEqual([{id: 1}]); 
});