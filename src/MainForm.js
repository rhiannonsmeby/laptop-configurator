import React from 'react'
import Customizer from './Customizer'

function MainForm(props){
   return( 
      <form className="main__form">
        <Customizer updateFeature={props.updateFeature} USCurrencyFormat={props.USCurrencyFormat} features={props.features} featureHash={props.featureHash} options={props.options} itemHash={props.itemHash} selected={props.selected}/>
      </form>
   );
}


export default MainForm