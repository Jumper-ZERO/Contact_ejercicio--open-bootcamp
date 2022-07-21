import React from 'react';
import { ContactInfo } from '../../models/contact.class';
import Contact from '../pure/contact';

const ContactList = () => {

    const defaultInfo = new ContactInfo("Jeremi", "Aron", "chancanlabajos@gmail.com", false)

    return (
        <React.Fragment>
            <Contact info={ defaultInfo } />
        </React.Fragment>
    );
}

export default ContactList;