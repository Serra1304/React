import React from 'react';
import ComponenteB from './componenteB';
import { Contacto } from './contacto.class';

const ComponenteA = () => {

    const defaultContact = new Contacto('Manuel', 'Torres', 'mtorres@email.com', true);

    return (
        <div>
            <h3>Contactos:</h3>
            <ComponenteB contacto = { defaultContact }></ComponenteB>
        </div>
    );
}

export default ComponenteA;
