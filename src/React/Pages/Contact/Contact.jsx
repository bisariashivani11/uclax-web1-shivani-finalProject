import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../common/media_queries.js';

/* Components ---------------------------*/
import Profile from './Profile.jsx';
import ContactForm from './ContactForm.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <div className='left'>
                <Profile />
            </div>

            <div className='right'>
                <ContactForm />
            </div>
            
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
justify-content: center;
text-align: center;
margin-top: 100px;
line-height: 30px;
margin-bottom: 200px;

    
    .left {

        flex: 2;

    }
    .right {
        flex: 3;
        
    }
    
    @media ${mq.tablet} {
        display: block;
    } 
    
    @media ${mq.desktop} {
        display: flex;
    } 
`;

