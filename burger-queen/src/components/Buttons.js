import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Button.css';
import { Button } from 'reactstrap';


class Buttons extends React.Component {
    render() {
        return (
            <div className="Areas">
                <Button className="btn-lg" color="warning" block>
                    {this.props.text}
                </Button>
            </div>
        );
    }
}

export default Buttons;



