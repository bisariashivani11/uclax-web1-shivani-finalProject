import React from 'react';

/* Components ---------------------------*/
import Profile from './Profile.jsx';
import ContactForm from './ContactForm.jsx';
import GoogleMap from './GoogleMap.jsx';

const Contact = () => {

    return (
        <div className='Contact'>
           <h1>Contact</h1>
           <Profile />
           <ContactForm />
           <GoogleMap />
        </div>
    );
}

export default Contact;