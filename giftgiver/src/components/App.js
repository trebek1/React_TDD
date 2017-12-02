import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap'; 
import Gift from './Gift'; 


// Want App to have react methods for component delegated to App class
class App extends Component {
	// super will call constructor of parent component class
	constructor(){
		super();
		this.state = {gifts: []};
	}

	// with => the same this object is passed to fn 
	addGift = () => {
		const { gifts } = this.state;
		const ids = this.state.gifts.map(gift => gift.id);

		const maxId = ids.length > 0 ? Math.max(...ids) : 0; 

		gifts.push({id: maxId + 1});
		
		this.setState({gifts}); 
	}

	removeGift = id => {
		const gifts = this.state.gifts.filter(gift => gift.id != id);
		this.setState({gifts}); 
	}	

	render(){
		return (
			<div>
				<h2> Gift Giver </h2>
				<div className="gift-list">
				{
					this.state.gifts.map(gift => {
						return (
							<Gift 
								key={gift.id} 
								gift={gift}
								removeGift={this.removeGift}
							/>
						)
					})
				}
				</div>
				<Button onClick={this.addGift} className="btn-add"> Add Gift</Button>
			</div>
		)
	}
}

export default App; 