import React, {Component} from "react";
import PropTypes from 'prop-types';
import { InputItem } from "./InputItem";

class Input extends Component {

    state = {
        value: '',
        contentLength: true,
        contentMaxLength: 50
    }

    handlerInput = e => {
        const {contentMaxLength, value} = this.state;

        if (contentMaxLength > value.length || e.nativeEvent.inputType === "deleteContentBackward") {
            this.setState({
                value: e.target.value,
                contentLength: true
            });
        } else {
            this.setState({contentLength: false});
        }
    }

    render = () => {
        const {value, contentLength, contentMaxLength} = this.state;
        const {handlerInput} = this;

        return (
            <>
                <InputItem
                    name='Something'
                    type='text'
                    placeholder='do something'
                    value={value}
                    handler={handlerInput}
                />

                {
                    contentLength ? 
                    (
                        <div>You can still write {contentMaxLength - value.length} characters</div>
                    ):
                    (
                        <div style={{color: 'red'}}>Limet was reached</div>
                    )
                    
                }
            </>
        )
    }
}

export default Input;


