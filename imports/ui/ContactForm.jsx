import React, { useState } from 'react';

import { ContactsCollection } from '../api/ContactsCollection';

export default contactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    const changeName = (e) => {
        setName(e.target.value);
    };
    
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };
    
    const changeImageUrl = (e) => {
        setImageUrl(e.target.value);
    };
    
    const saveContact = () => {
        const contact = { name, email, imageUrl };
        ContactsCollection.insert(contact);
        setName("");
        setEmail("");
        setImageUrl("");
    };

    return (
        <React.Fragment>
        <h2> Create Contact </h2>
        <form>
        <div>
          <label htmlFor="name"> Name: </label>
          <input type="text" id="name" value={name} onChange={changeName} />
        </div>
  
        <div>
          <label htmlFor="email"> Email: </label>
          <input type="email" id="email" value={email} onChange={changeEmail} />
        </div>
  
        <div>
          <label htmlFor="imageUrl"> Image URL: </label>
          <input type="text" id="imageUrl" value={imageUrl} onChange={changeImageUrl} />
        </div>
  
        <div>
          <button type="button" id="save-contact" onClick={saveContact}> Save Contact </button>
        </div>
      </form>
      </React.Fragment>
    );
}