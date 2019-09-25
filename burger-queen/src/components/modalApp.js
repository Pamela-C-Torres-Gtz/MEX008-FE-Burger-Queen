import React, { Component } from 'react';

import Modal from './Modal';
import hamburger from '../img/hamburger.jpg';

class ModalApp extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Promo del día</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Hamburguesas veganas bien ricolinas al 2x1
                        <figure>
                   <img className="hamburgerImage" src={hamburger} alt="Promo del dia"></img>
                </figure>
                </Modal>
            </div>
        );
    }
}

export default ModalApp;