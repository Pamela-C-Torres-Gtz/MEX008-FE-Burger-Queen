import React from 'react';
import '../styles/menuEnsalada.css';

class MenuEnsalada extends React.Component {
    render (){
        return (
            <div id="ensalada">
                <h3> {this.props.texto}  </h3> 
                <p>{this.props.text}</p>
                <p>{this.props.text1}</p>
            
            </div>
        )
    }
}

export default MenuEnsalada; 