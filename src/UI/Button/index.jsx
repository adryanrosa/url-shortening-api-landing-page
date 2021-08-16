import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { text } = this.props;
    
		return (
			<button className="btn">
				{text}
			</button>
		);
	}
}

export default Button;
