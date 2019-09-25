import React from 'react';
import Input from '../components/Input';
import Buttons from '../components/Buttons';


class Registro extends React.Component {
    render() {
        return <div>
            <Input labelName = "Orden a nombre de:"  />
            <Buttons text = "Registrar" />
        </div>
    }
}

export default Registro;