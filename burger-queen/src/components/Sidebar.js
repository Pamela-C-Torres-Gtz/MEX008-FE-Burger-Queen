import React, { Component } from 'react';
import MenuEnsaladas from '../components/menuEnsalada';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Input } from 'reactstrap'; 
import '../styles/Sidebar.css';
import burger from '../img/burger.png';
import pizza from '../img/pizzaicon.png';
import salad from '../img/salad.png';
import hotdog from '../img/hot-dog.png';
import drinks from '../img/lemonade.png'; 
import 'react-web-tabs/dist/react-web-tabs.css';
import Footer from '../components/Footer';



class Sidebar extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        {/* Mobile */}
         <div className="mobile_tabs">
        <TabList>
          <div id="burger_tab">
          <Tab tabFor="vertical-tab-one"><img className="Sidebar_img" src={burger} alt="salads"></img></Tab>
          </div>
          <div id="pizza_tab">
          <Tab tabFor="vertical-tab-two"><img className="Sidebar_img" src={pizza} alt="salads"></img></Tab>
          </div>
          <div id="salad_tab">
          <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"></img></Tab>
          </div>
          <div id="Hot-dogs_tab">
          <Tab tabFor="vertical-tab-four"><img className="Sidebar_img" src={hotdog} alt="Hot-dogs"></img></Tab>
          </div>
          <div id="drinks_tab">
          <Tab tabFor="vertical-tab-five"><img className="Sidebar_img" src={drinks} alt="Bebidas"></img></Tab>
        </div>
        </TabList>
        </div>
        <div className="mobile_tabs">
        <TabPanel tabId="vertical-tab-one">
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
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
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
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
        
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
                  
                  
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
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

        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
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
        </TabPanel>
        <div>
        <Footer/>
        </div>
        </div>
        
             
         {/* Desktop */}
         <div className="desktop_tabs">
        <TabList>
          <div id="burger_tab-desktop">
          <Tab tabFor="vertical-tab-one"><img className="Sidebar_img" src={burger} alt="salads"></img>Hamburguesas</Tab>
          </div>
          <div id="pizza_tab-desktop">
          <Tab tabFor="vertical-tab-two"><img className="Sidebar_img" src={pizza} alt="salads"></img>Pizzas</Tab>
          </div>
          <div id="salad_tab-desktop">
          <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"></img>Ensalada</Tab>
          </div>
          <div id="Hot-dogs_tab-desktop">
          <Tab tabFor="vertical-tab-four"><img className="Sidebar_img" src={hotdog} alt="Hot-dogs"></img>Hot-dogs</Tab>
          </div>
          <div id="drinks_tab-desktop">
          <Tab tabFor="vertical-tab-five"><img className="Sidebar_img" src={drinks} alt="Bebidas"></img>Bebidas</Tab>
        </div>
        </TabList>
        <div className="desktop_tabs">
        <TabPanel tabId="vertical-tab-one">
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
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
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
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
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
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
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

        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
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
        </TabPanel>

      </div>
      </div>
      
      </Tabs>
    );
  }
}

export default Sidebar;