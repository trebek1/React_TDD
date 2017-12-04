import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap'; 
import Gift from './Gift';
import { max_number } from '../helper'; 


// Want App to have react methods for component delegated to App class
class App extends Component {
	
	// super will call constructor of parent component class
	constructor(props){
		super(props);
		this.state = {gifts: []};
	}

	// with => the same this object is passed to fn 
	addGift = () => {
		const { gifts } = this.state;
		const ids = this.state.gifts.map(gift => gift.id);

		const maxId = max_number(ids);

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