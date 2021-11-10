import React, { Component } from "react";
import uniqid from 'uniqid';

import { Cell } from "./Cell";

const arrayTable = Array.from({ length: 10},
    () => ({
        id: uniqid(),
        children: Array.from({ length: 10},
            () => ({
                id: uniqid(),
                value: ''
            })
        )
    })
)

class Table extends Component {
    state = {
        table: arrayTable
    }

    hendlerInput = (e, id) => {
        this.setState({
           table: this.state.table.map(item => {
                return {
                    ...item,
                    children: item.children.map(children => {
                        if (children.id === id) {
                            children.value = e.target.value
                        }
                        return children
                    }) 
                }
           })
        })
    }

    render = () => {
        const {table} = this.state;

        return (
            <table>
                <tbody>
                    {
                        table.map(item => {
                            return( 
                                <tr key={item.id}>
                                    {
                                        item.children.map((td) => {
                                            return (
                                                <td key={td.id}>
                                                    <Cell 
                                                        id={td.id}
                                                        handler={this.hendlerInput}
                                                        value={td.value}
                                                    />
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        )
    }
}

export default Table;
