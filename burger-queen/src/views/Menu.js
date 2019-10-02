import React from 'react';
import MenuEnsaladas from '../components/menuEnsalada';
import { Input } from 'reactstrap'; 
import Footer from '../components/Footer';

class Menu extends React.Component {
    render () {
        return  (
        <div className="menu">

                    <div className="ensalada"> 
                    
                        <div className="ensalada1">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'DELIRIUM'/> 
                                <MenuEnsaladas text1 = '$50 '/>
                        </div>
                        
                        <div className="ensalada2">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'PARAÍSO PERDIDO'/>
                                <MenuEnsaladas text1 = '$70'/>
                        </div>

                    </div>

                    <div className="hamburguesa">
                        <div className="hamburguesa1">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'MALICIA'/> 
                                <MenuEnsaladas text1 = '$50 sencilla  $65 combo' />
                        </div>
                        <div className="hamburguesa2">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'SOBERBIA'/> 
                                <MenuEnsaladas text1 = '$50 sencilla  $65 combo' />
                        </div>
                        <div className="hamburguesa3">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'GULA'/> 
                                <MenuEnsaladas text1 = '$50 sencilla  $65 combo' />
                        </div>
                        <div className="hamburguesa4">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'ALMA EN PENA'/> 
                                <MenuEnsaladas text1 = '$65 sencilla  $80 combo' />
                        </div>
                        <div className="hamburguesa5">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'ENCARNACIÓN'/> 
                                <MenuEnsaladas text1 = '$65 sencilla  $80 combo' />
                        </div>
                        <div className="hamburguesa6">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'BANANA LIMBO'/> 
                                <MenuEnsaladas text1 = '$65 sencilla  $80 combo' />
                        </div>

                    </div>

                    <div className="pizza">
                        <div className="pizza1">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'CHANEQUE'/> 
                                <MenuEnsaladas text1 = 'M $150   G $180  F $210' />
                        </div>
                        <div className="pizza2">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'SODOMA'/> 
                                <MenuEnsaladas text1 = 'M $130   G $160  F $190' />
                        </div>
                        <div className="pizza3">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'LUJURIA'/> 
                                <MenuEnsaladas text1 = 'M $150   G $180  F $210' />
                        </div>
                        <div className="pizza4">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'ÁNGEL CAÍDO'/> 
                                <MenuEnsaladas text1 = 'M $130   G $160  F $190' />
                        </div>
                        <div className="pizza5">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'PURGATORIO'/> 
                                <MenuEnsaladas text1 = 'M $150   G $180  F $210' />
                        </div>
                        <div className="pizza6">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'TIKI-HAWAIANA'/> 
                                <MenuEnsaladas text1 = 'M $140   G $170  F $200' />
                        </div>
                    
                    </div> 

                    <div className="jochos">
                        <div className="jocho1">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'JOCHOSLAW'/> 
                                <MenuEnsaladas text1 = '$50 sencilla  $65 combo' />
                        </div>
                        <div className="jocho2">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'XOLOESCUINTLE'/> 
                                <MenuEnsaladas text1 = '$65 sencilla  $80 combo' />
                        </div>
                        <div className="jocho3">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'PIT BULL'/> 
                                <MenuEnsaladas text1 = '$65 sencilla  $80 combo' />
                        </div>
                        <div className="jocho4">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'HACHIKO'/> 
                                <MenuEnsaladas text1 = '$70 sencilla  $85 combo' />
                        </div>
                        <div className="jocho5">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'PASTOR ALEMÁN'/> 
                                <MenuEnsaladas text1 = '$80 sencilla  $95 combo' />
                        </div>
                    
                    </div> 

                    <div className="bebidas">
                        <div className="malteada">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'MALTEADA'/> 
                                <MenuEnsaladas text1 = '$50' />
                        </div>
                        <div className="soda">
                                <Input className="input2" type="number" placeholder="Cant."></Input>
                                <MenuEnsaladas texto = 'SODA ITALIANA'/> 
                                <MenuEnsaladas text1 = '$45' />
                        </div>
                    
                    </div>  
                    <Footer />
             </div> 
        );
    }
}

export default Menu;