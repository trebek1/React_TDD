import React, { Component } from 'react'; 
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Gift extends Component {
	constructor(){
		// call constructor of parent 
		super(); 

		this.state = {person: '', present: ''}; 
	}

	render(){
		return (
			<div className="gift">
				<Form> 
					<FormGroup>
						<ControlLabel>Person</ControlLabel>
						<FormControl
						onChange={event => this.setState({person: event.target.value})}
						className="input-person" /> 
					</FormGroup> 

					<FormGroup>
						<ControlLabel>Present</ControlLabel>
						<FormControl
						onChange={event => this.setState({present: event.target.value})}
						className="input-present" /> 
					</FormGroup> 
				</Form> 
				<Button 
				className="btn-remove"
				onClick={() => this.props.removeGift(this.props.gift.id)}
				>
				Remove Gift 
				</Button>
			</div>
		)
	}
}

export default Gift; 