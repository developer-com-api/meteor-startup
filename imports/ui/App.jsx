import React from 'react';

import ContactFrom from './ContactForm';
import ContactsList from './ContactsList';

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactFrom />
    <ContactsList />
  </div>
);
