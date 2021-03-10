import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <div className='footer'>
                <img src='/assets/img/Footer/footer image.png' alt='Footer'/>
                <h3>Want to discuss your next project??<br></br>Or just want to chat??<br></br><br></br>Write to us at<br></br>mail.sjarchitects.com</h3>
                <h3></h3>
                <p>©2020.SJ Architects.<br></br>All Rights Reserved.</p>
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`

    position: relative;

    .footer {
        max-width: 100%;
        background-color: #5B5FA1;
        text-align: center;
        }

    h3 {
        position: absolute;
        top: 80px; left: 180px;
        color: white;
        text-align: left;
        background-color: rgba(24, 14, 14, 0.66);
        justify-content: center;
        margin: 0px;
        padding: 5px;
        }

    p {
        position: absolute;
        font-size:10px;
        bottom: 20px; right: 40px;
        color: white;
        margin: 0px;
        padding: 5px;
        }
`;
