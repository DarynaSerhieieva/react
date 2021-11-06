import React, { Component } from 'react';
import Guest from '../guest/Guest';
import guests from '../guests.json';
import Search from '../search/Search'
import './guests.css';

class Guests extends Component {
    state = {
        guests,
        search: ""
    }

    removeGuest = id => {
        this.setState({
            guests: this.state.guests.filter(guest => guest._id !== id)
        });
    }

    setSearch = event => {
        this.setState({
            search: event.target.value
        });
    }

    getGuests = () => {
        return this.state.guests.filter(guest => {
            return guest.name.includes(this.state.search) || 
                guest.company.includes(this.state.search) ||
                guest.phone.includes(this.state.search) ||
                guest.address.includes(this.state.search)
        })
    }

    render = () => {
        return( 
            <>
                <Search 
                
                    setSearch={this.setSearch}
                />
                <ul className="list">
                    {
                        this.getGuests().map( ({_id, name, company, phone, address }) =>
                            <Guest
                                key={_id}
                                id={_id}
                                name={name}
                                company={company}
                                phone={phone}
                                address={address}
                                removeGuest={this.removeGuest}
                            />  
                        )
                    }
                </ul>
            </>
        );
    }
}

export default Guests;