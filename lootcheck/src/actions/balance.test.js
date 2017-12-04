import * as constants from './constants'; 
import * as actions from './balance'; 

it("creates an action to set the balance ", () => {

	// inital balance is zero 
	const balance = 0; 

	// create an action using setBalance and balance 
	const expectedAction = {type: constants.SET_BALANCE , balance };

	// expect setting the balance to equal the expected Action 
	expect(actions.setBalance(balance)).toEqual(expectedAction); 
	
}); 