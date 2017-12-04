import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
	render(){
		return (
			<div>
				<h3 className="balance">Wallet Balance: {this.props.balance}</h3>
			</div>
		)
	}
}
// what part of redux store to use (mapStateToProps)
// action creators to use on component to send data to store 
export default connect(	state => {balance: state} ,null)(Wallet); 