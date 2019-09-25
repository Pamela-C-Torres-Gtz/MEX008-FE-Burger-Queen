import React from 'react';
import Textips from '../components/textTips';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';


class Tips  extends React.Component {
    render (){
        return <div>
            <Textips texto = 'Saluda a tu cliente'/>
            <Textips texto = 'Pregunta qué necesita'/>
            <Textips texto = 'Ofrece menú y bebida'/>
            <Link to="/Home">
                <Buttons text="Empezar" />
            </Link>
      </div>
    }

}
export default Tips