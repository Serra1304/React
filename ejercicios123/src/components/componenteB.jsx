import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto.class';


const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h4>Nombre: { contacto.nombre }</h4>
            <h4>Apellido: { contacto.apellido }</h4>
            <h4>Email: { contacto.email }</h4>
            <h4>Contacto: { contacto.conectado ? 'EN LINEA' : 'NO DISPONIBLE'}</h4>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
