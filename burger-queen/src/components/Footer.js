import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';
import { Button, Label, Input } from 'reactstrap';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <div className="row">
              <div className="Fotter_col1 col-6 col-md6">
                <Label className="text">
                    <h4 className="font-weight-blod">Observaciones</h4></Label>
              </div>
              <div className="Fotter_col1 col-6 col-md6">
                <Input className="input" type="text"></Input>
              </div>
            </div>
          
            <Button className="btn" color="warning" block>
              <Link> Confirmar</Link>
            </Button>
           
          </div>
        );
    }
}
export default Footer;