import React from 'react';
import '../styles/textTips.css';


class Textips extends React.Component {
    render(){
        return(
            <div id="text">
                <h2>{this.props.texto}</h2>
            </div>
        )
    }
}
export default Textips;


