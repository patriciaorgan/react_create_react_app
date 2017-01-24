import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {
	state = { greetings: ['Jim', 'Sally', 'Bender']};
	
	renderGreetings() {
		return this.state.greetings.map(name => (
			<HelloWorld 
				key={name} 
				name={name} 
				removeGreeter={this.removeGreeter}
			/>
		));
	}

	addGreeter = (newName) => {
		this.setState({ greetings: [...this.state.greetings, newName]});
	}
	
	removeGreeter = (removeName) => {
		const filteredGreetings = this.state.greetings.filter(name => {
			return name !== removeName;
		});
		this.setState({ greetings: filteredGreetings });
	}

	render() {
		return (
			<div className="HelloWorldList">
				<AddGreeter addGreeter={this.addGreeter}/>
				{this.renderGreetings()}
			</div>
		);
	}
}
export default HelloWorldList;