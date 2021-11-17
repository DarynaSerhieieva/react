import React, { Component } from "react";
import {MapRadioButton, RadioButton} from './toggler/index';
import {Cell, Row, Table} from './tabel';
import { ThemeContext } from './context.helper';


class Context extends Component {
    state = {
        theme: 'transparent'
    }

    changeColor = ( name ) => _ => {
        this.setState({ theme: name });
    }

    render = () => {
        const { theme } = this.state;
        const { changeColor } = this;

        return (
            <ThemeContext.Provider value={{ theme }}>

                <MapRadioButton label='color' action={changeColor} actionState={theme}>
                    <RadioButton name='red'/>
                    <RadioButton name='orange'/>
                </MapRadioButton>

                <Table>
                    <Row head="true">
                    <Cell background='red'>#</Cell>
                    <Cell type="date">2</Cell>
                    <Cell type="number">3</Cell>
                    <Cell type="money" currency="$">4</Cell>
                    </Row>
                    <Row>
                    <Cell type="" background='red'>1</Cell>
                    <Cell type="date">2</Cell>
                    <Cell type="number">3</Cell>
                    <Cell type="money" currency="$">4</Cell>
                    </Row>
                </Table>

            </ThemeContext.Provider>
        );
    }
}

export default Context;
