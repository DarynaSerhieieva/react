import React, { Component } from "react";
import {MapRadioButton, RadioButton} from './index';


class Toggler extends Component {
  state = {
    gender: 'male',
    layout: 'baseline'
  }

  changeTogglerLayout = ( name ) => _ => {
    this.setState({ layout: name })
  }

  changeTogglerGender = ( name ) => _ => {
    this.setState({ gender: name })
  }

  render = () => {
    const {gender, layout} = this.state;

    return (
      <>
        <MapRadioButton label='gender' action={this.changeTogglerGender} actionState={gender}>
          <RadioButton name='male'/>
          <RadioButton name='female'/>
        </MapRadioButton>
        
        <MapRadioButton label='layout' action={this.changeTogglerLayout} actionState={layout}>
          <RadioButton name='left'/>
          <RadioButton name='center'/>
          <RadioButton name='right'/>
          <RadioButton name='baseline'/>
        </MapRadioButton>
      </>
    );
  }
}

export default Toggler;