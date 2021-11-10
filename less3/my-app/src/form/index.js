import React, {Component} from "react";
import {MapRadioButton, RadioButton} from '../toggler';
import { InputItem } from "../input/InputItem";

class Form extends Component {
    state = {
        valueName: '',
        valuePassword: '',
        valueAge: '',
        valueaLanguage: '',
        gender: 'male',
        layout: 'baseline'
    }

    handlerName = e => {
        this.setState({
            valueName: e.target.value
        })
    }

    handlerPassword = e => {
        this.setState({
            valuePassword: e.target.value
        })
    }

    handlerAge = e => {
        this.setState({
            valueAge: e.target.value
        })
    }

    handlerLanguage = e => {
        this.setState({
            valueaLanguage: e.target.value
        })
    }

    changeTogglerGender = name => _ => {
        this.setState({ gender: name })
    }

    changeTogglerLayout = name => _ => {
        this.setState({ layout: name })
    }

    sendHendler = e => {
        e.preventDefault();
        console.log('info from form', this.state);
    }

    render = () => {
        const {valueName, valuePassword, valueAge, valueaLanguage, gender, layout} = this.state;
        const {handlerName, handlerPassword, handlerAge, handlerLanguage, changeTogglerGender, changeTogglerLayout, sendHendler} = this;

        return (
            <>
                <form onSubmit={sendHendler}>
                    <InputItem
                        name='Name:'
                        type='text'
                        placeholder='your name'
                        value={valueName}
                        handler={handlerName}
                    />

                    <InputItem
                        name='Password:'
                        type='password'
                        placeholder='your password'
                        value={valuePassword}
                        handler={handlerPassword}
                    />

                    <MapRadioButton label='gender' action={changeTogglerGender} actionState={gender}>
                        <RadioButton name='male'/>
                        <RadioButton name='female'/>
                    </MapRadioButton>

                    <InputItem
                        name='Age:'
                        type='number'
                        placeholder='your age'
                        value={valueAge}
                        handler={handlerAge}
                    />

                    <MapRadioButton label='layout' action={changeTogglerLayout} actionState={layout}>
                        <RadioButton name='left'/>
                        <RadioButton name='center'/>
                        <RadioButton name='right'/>
                        <RadioButton name='baseline'/>
                    </MapRadioButton>

                    <InputItem
                        name='Age:'
                        type='text'
                        placeholder='your favorite language'
                        value={valueaLanguage}
                        handler={handlerLanguage}
                    />

                    <button type='submit'>Send</button>

                </form>
            </>
        )
    }
}

export default Form;