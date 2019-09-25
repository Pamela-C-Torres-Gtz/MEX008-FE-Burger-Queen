import React from "react";
import './styles/modal.css';

//show posee un valor booleano que indica cuando debe cerrarse el modal. Close es una function que
//se activa cuando deba cerrarse el modal (al activar ese boton). Children es pasado de show a close y 
// representa el contenido del modal. 
//De manera que el modal es un componente funcional que recibe su contenido a traves de un hijo.
//La funcion de cerrar es pasada como un prop a la composicion del modal.
//El estilo inline de modal wrapper hace una declaracion condicional que, a la vez, configura 
// el estado de la visibilidad dependiendo del valor booleano de show.

const modal = (props) => {
  return (
      <div>
          <div className="modal-wrapper"
              style={{
                  transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)', 
                  opacity: props.show ? '1' : '0'
              }}>
              <div className="modal-header">
                  <h3>Promo del día</h3>
                  <span className="close-modal-btn" onClick={props.close}> X </span>
              </div>
              <div className="modal-body">
                  <p>
                      {props.children}
                  </p>
              </div>
              <div className="modal-footer">
              </div>
          </div>
      </div>
  )
}

export default modal;
