import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <div className='footer'>
                <img src='/assets/img/Footer/footer2.png' alt='Footer'/>
                <p>©2020.SJ Architects.All Rights Reserved.</p>
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`

  
    position: relative;

    .footer {
            text-align: center;
            width: 100%;

            img {
                width: 100%;
            }

        }

    p {
        position: absolute;
        font-size:12px;
        bottom: 20px; right: 45%;
        color: white;
        margin: 0px;
        padding: 5px;
        }

       
`;
