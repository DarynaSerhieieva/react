import React, { Component } from "react";
import User from "./user";

class Users extends Component {

    state = {
        users: []
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then ( users => users.json())
        .then ( users => {
            this.setState({users: users.map(user => ({interviewed: false, user}))})
        })
    }

    toggleInterviewed = (id) => {
        this.setState({
            users: this.state.users.map(({interviewed, user}) => {
                if (user.id === id) {
                    interviewed = !interviewed
                }
                return {interviewed, user};
            })
        })
    }

    render() {
        return(
            <>
                <h2>Im User</h2>
                <ul>
                    {
                        this.state.users.map(({interviewed, user}) => (
                            <User 
                                key= {user.id}
                                interviewed={interviewed}
                                user={user}
                                toggleInterviewed={this.toggleInterviewed}
                            />
                        ))
                    }
                </ul>
            </>
        )
    }

}

export default Users;