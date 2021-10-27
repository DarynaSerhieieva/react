import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    
    render = () => {
        const { setSearch } = this.props;

        return(
            <input className="input" onChange={event => setSearch(event)} placeholder="Введите имя гостя для поиска"/>
        )
    }

}
export default Search;