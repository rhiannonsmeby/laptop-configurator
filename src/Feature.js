import React from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';

function Feature(props) {
	const options = props.features[props.feature].map(item => {
		const itemHash = slugify(JSON.stringify(item));
		return (
			<FeatureItem 
				itemHash={itemHash} 
				item={item}
				feature={props.feature}
				selected={props.selected}
              	USCurrencyFormat={props.USCurrencyFormat}
				updateFeature={props.updateFeature} />
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

export default Feature