import React from 'react';
import { Input } from 'reactstrap';
import '../styles/menuEnsalada.css';


class MenuEnsalada extends React.Component {

    clickHandler(e){
        this.props.onClick()
    }
    render (){
        return (
            <div className="menuEnsalada">
                <table>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>S</td>
                        <td>C</td>
                    </tr>
                   
                    <tr>
                        <td className="cant">
                            <Input type="number" placeholder="0"></Input>
                        </td>
                        <td className="name">
                            {this.props.name}
                        </td>
                        <td className="price">
                            <Input type="checkbox"/><label>$ {this.props.price}</label>
                        </td>
                        <td className="combo">
                            <Input type="checkbox"/><label>$ {this.props.combo}</label>
                        </td>
                        <td className="add">
                            <i className="fas fa-plus-square" onClick={this.props.onClick}></i>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}

export default MenuEnsalada; 