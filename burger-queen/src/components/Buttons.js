import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Button.css';


class Buttons extends React.Component {
    render() {
        return (
            <div className="Areas">
                <button className="btns">
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Buttons;



