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

it('creates an action to deposit into the balance ', () =>{
	const deposit = 10; 
	const expectedAction = {type: constants.DEPOSIT, deposit}; 

	expect(actions.deposit(deposit)).toEqual(expectedAction); 

});

it('creates an action to withdraw from the balance ', () => {
	const withdraw = 10; 
	const expectedAction = {type: constants.WITHDRAW, withdraw}; 

	expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});