import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';


const Header = () => {

    return (
        <HeaderStyled className='Header'>
             <img src='/assets/img/Header/logo.png' alt='Logo'/>
             <div className='company' >
                    <h1>SJ Architects</h1>
                    <h6>Architects| Interior Designers | Design Professionals</h6>
             </div>
             
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`

justify-content: center;
text-align: center;
    

    /* position: relative;
        left: 10px;
        top: 0px; */
        line-height: 0px;
        margin-top: 50px;

    .company {
        width: 100%;
        margin-top: 30px;
    }

    /* @media ${mq.tablet} {
        display: block;
    }

    @media ${mq.desktop} {
        display: flex;
    } */

`;