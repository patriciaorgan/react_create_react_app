import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {

	state = {greetingName: ''}

	handleUpdate = event =>this.setState({greetingName: event.target.value})

	addGreeting = () =>{
		this.props.addGreeter(this.state.greetingName);
		this.setState({greetingName: ''});
	}
	render() {
		return(
			<div className="AddGreeter">
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.greetingName} />
				&nbsp;&nbsp;
        		<button onClick={this.addGreeting}>Add</button>
			</div>
		);
	}
}

export default AddGreeter;
