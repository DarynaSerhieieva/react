import React, {Component} from "react";
// import {MapRadioButton, RadioButton} from '../toggler';
import { InputItem } from "../input/InputItem";

class Form extends Component {
    state = {
        valueName: '',
        valuePassword: ''
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

    render = () => {
        const {valueName, valuePassword} = this.state;
        const {handlerName, handlerPassword} = this;

        return (
            <>
                <form>
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


                </form>
            </>
        )
    }
}

export default Form;