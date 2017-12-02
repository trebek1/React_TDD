// Need react 
import React from 'react'; 

// only render outer jsx but not inner content (shallow)
import { shallow } from 'enzyme'; 

import App from './App'; 

describe("App", () => {
	const app = shallow(<App />);

	it("renders correctly", () => {
		// Snapshot keeps a history of each change to component that is made 
		expect(app).toMatchSnapshot();
	});

	it("initializes the `state` with an empty list of gifts", ()=> {
		expect(app.state().gifts).toEqual([]); 
	});

	describe('when clicking the `add-gift` button', () => {
		beforeEach(() => {
			app.find('.btn-add').simulate('click'); 
		});

		afterEach(() => {
			app.setState({gifts: []});
		}); 

		it("adds a new `state`", () =>{
			// find child nodes with jsx tags or className
			expect(app.state().gifts).toEqual([{id: 1}]); 
		});

		it("adds a new gift to the rendered list", () => {
			// test pollution
			expect(app.find('.gift-list').children().length).toEqual(1);
		});
	}); 
});	




// BDD given, when, then to get around test pollution 

// group test together by type 