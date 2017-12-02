// Need react 
import React from 'react'; 

// only render outer jsx but not inner content (shallow)
import { shallow } from 'enzyme'; 

import App from '/.App'; 

const app = shallow(<App />);

it("renders correctly", () => {
	expect(app).toMatchSnapshot();
});