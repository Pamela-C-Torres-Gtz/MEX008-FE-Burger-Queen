import React from 'react';

class Notificacion extends React.Component {
    render() {
        return <div>
            <h2><span className="font-weight-blod">{this.props.content}</span></h2>
        </div>
    }
}
export default Notificacion;