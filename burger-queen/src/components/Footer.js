import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';
import { Button, Label, InputGroup, Input } from 'reactstrap';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <div className="Footer_header">
              <div>
                <Label className="text-center">
                    <h4 className="font-weight-blod">Observaciones</h4></Label><br />        
              </div>
                <InputGroup className="InputGroup" size="lg" type="text"><Input/></InputGroup> <br />
            </div>
         
            <Button className="btn" color="warning" block>
              <Link to="/EnvioOrden"> Confirmar</Link>
            </Button>
          </div>
        );
    }
}
export default Footer;