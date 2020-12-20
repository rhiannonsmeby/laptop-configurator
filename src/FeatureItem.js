import React from 'react';
import slugify from 'slugify';

function FeatureItem(props) {
	const options = props.features[props.feature].map(item => {
		const itemHash = slugify(JSON.stringify(item));
		return (
		  <div key={itemHash} className="feature__item">
			<input
			  type="radio"
			  id={itemHash}
			  className="feature__option"
			  name={slugify(props.feature)}
			  checked={item.name === props.selected[props.feature].name}
			  onChange={e => props.updateFeature(props.feature, item)}
			/>
			<label htmlFor={itemHash} className="feature__label">
			  {item.name} ({props.USCurrencyFormat.format(item.cost)})
			</label>
		  </div>
		);
	  });

	  return (
		<fieldset className="feature" key={props.featureHash}>
		  <legend className="feature__name">
			<h3>{props.feature}</h3>
		  </legend>
		  {options}
		</fieldset>
	  );
	
}

export default FeatureItem