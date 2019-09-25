import React from 'react';
import MenuEnsaladas from '../components/menuEnsalada';

class Menu extends React.Component {
    render () {
        return <div>
            <MenuEnsaladas texto = 'DELIRIUM'/>
            <MenuEnsaladas text = 'Lechuga romana, col morada, Manzana, arandanos, nuez, limon y miel de maguey. '/>
            <MenuEnsaladas text1 = '$50'/>
            <MenuEnsaladas texto = 'PARAÍSO PERDIDO'/>
            <MenuEnsaladas text = 'Mix de lechugas frescas, quinoa, frijoles negros,aguacate, cilantro, jitomate, cebolla morada.'/>
            <MenuEnsaladas text1 = '$70'/>

        </div> 
    }
}

export default Menu;