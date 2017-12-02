import React, { Component } from 'react'; 

// Want App to have react methods for component delegated to App class
class App extends Component {
	// super will call constructor of parent component class
	constructor(){
		super();
		this.state = {gifts: []};
	}
	render(){
		return (
			<div>
				<h2> Gift Giver </h2>
			</div>
		)
	}
}

export default App; 