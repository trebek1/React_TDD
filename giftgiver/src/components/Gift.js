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
			<div>
				<Form> 
					<FormGroup>
						<ControlLabel>Person</ControlLabel>
						<FormControl
						onChange={event => this.setState({person: event.target.value})}
						className="input-person" /> 
					</FormGroup> 
				</Form> 
			</div>
		)
	}
}

export default Gift; 