import React from 'react';

class Input extends React.Component {
    render() {
        return <div>
            <label>{this.props.labelName}</label>
            <input type="text" placeholder="Nombre"></input>
        </div>
    }
}

export default Input;