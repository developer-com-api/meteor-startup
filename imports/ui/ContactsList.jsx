import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { ContactsCollection } from '../api/ContactsCollection';

export default ContactsList = () => {
    const contacts = useTracker( () => {
        return ContactsCollection.find().fetch();
    });

    return (
        <React.Fragment>        
            <h1> Contact List </h1>
            <div>
                <ul>
                    { contacts.map( (contact, index) => (<li key={'contact'+index}> { contact.name + ' - ' + contact.email }</li>) )}
                </ul>
            </div>
        </React.Fragment>
    );
};