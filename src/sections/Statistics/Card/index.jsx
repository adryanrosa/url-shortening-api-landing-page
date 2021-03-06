import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { title, paragraph, image } = this.props;
    
		return (
			<div className="statistics__card">
				<div className="statistics__card__image-container">
					<img src={image} alt={title} />
				</div>
				<h3>{title}</h3>
				<p>{paragraph}</p>
			</div>
		);
	}
}

export default Card;
