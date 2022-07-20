//Medium
import React from 'react';
class BasicInfoM extends React.Component {
    constructor(props) {
        super();
       this.state = {
            person: {
                name: props.name,
                number: props.number,
                birthdate: props.birthdate
            }
        };
    }
    render() {
        return (
            <div>
                <p>My name is {this.state.person.name}</p>
                <p>My number is {this.state.person.number}</p>
                <p>My birthday is {this.state.person.birthdate}</p>
            </div>
        )
    }
}

export default BasicInfoM

