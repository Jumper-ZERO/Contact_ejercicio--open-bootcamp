import React from 'react';
import PropTypes from 'prop-types';
import { ContactInfo } from '../../models/contact.class';

const Contact = ({ info }) => {
    return (
        <div>
            <h2>Nombre: {info.name}</h2>
            <h3>Apellido: {info.last_name}</h3>
            <h3>Correo: {info.email}</h3>
            <h3>Estado: {info.status ? "En Línea" : "No Disponible"}</h3>
        </div>
    );
};

Contact.prototype = {
    info: PropTypes.instanceOf({ ContactInfo }),
}

export default Contact;