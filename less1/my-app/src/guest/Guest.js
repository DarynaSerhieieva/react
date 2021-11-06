import React, { Component } from 'react';
import './guest.css'
class Guest extends Component {
    render = () => {
        const { id, name, company, phone, address, removeGuest } = this.props;

        return (
            <li className="list__guest">
                <div>
                    <p className="list__name">Гость <span>{ name } </span> работает в компании <span>"{ company }".</span></p>
                    <p className="list__contact">Его контакты: 
                    <span><b>{ phone }</b></span>
                    <span><b>{ address }</b></span>
                    </p>
                </div>
                <button className="button" onClick={() => removeGuest(id)} type="button">Прибыл</button>
            </li>
        );
    }
}

export default Guest;