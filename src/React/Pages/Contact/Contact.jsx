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
            <div className='text'>
                <h3>Want to discuss your next project??<br></br>
                Or just want to chat??</h3>
                <h2>Get in touch!</h2>
                <h4>If you are interested in becoming a part of our team<br></br>please forward your resume and a few samples of your work to us at careers@sjarchitects.com</h4>
            </div>

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

    .text {
        flex: 2;
        margin-top: 80px;
        padding: 10px;
    
    }
    h4 {
        margin-top: 70px;
    }

    .left {
        flex: 2;
    }

    .right {
        text-align: left;
        flex: 2;
        margin-left: 0px;
        
    }
    
    @media ${mq.tablet} {
        display: block;
    } 
    
    @media ${mq.desktop} {
        display: flex;
    } 
`;

