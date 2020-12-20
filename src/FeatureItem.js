import React from 'react';
import slugify from 'slugify';

function FeatureItem(props) {
	return (
		<div className="feature__item">
			<input
				type="radio"
				id={props.itemHash}
				className="feature__option"
				name={slugify(props.feature)}
				checked={props.checked}
				onChange={e => props.onUpdateFeature(props.feature, props.item)}
			/>
			<label htmlFor={props.itemHash} className="feature__label">
				{props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
			</label>
		</div>
	)
}

export default FeatureItem