import React from 'react'
import FeatureItem from './FeatureItem'
import FEATURES from './features'

function Customizer(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return (
            <FeatureItem
                key={featureHash}
                featureHash={featureHash}
                feature={feature}
                features={FEATURES}
                selected={props.selected}
                USCurrencyFormat={props.USCurrencyFormat}
                updateFeature={props.updateFeature} />
        );
        });
        
      return( 
            <form className="main__form">
                  <h2>Customize your laptop</h2>
                  {features}
              </form>
         );
}

export default Customizer;