import React from 'react'
import FEATURES from './features'
import Feature from './Feature'

function MainForm(props){
   const features = Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
          <Feature
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


export default MainForm