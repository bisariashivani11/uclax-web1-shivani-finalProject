import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../common/media_queries.js';

const MidSection = () => {

    return (
        <MidSectionStyled className='MidSection'>
            <img src='/assets/img/Home/MidSection/mid1.png' alt='Project'/>
            <img src='/assets/img/Home/MidSection/mid2.png' alt='Project'/>
        </MidSectionStyled>
    );
}

export default MidSection;

const MidSectionStyled = styled.div`

    margin-top: 100px;
    img {
                width: 100%;
            }

    @media ${mq.tablet} {
        display: block;
        justify-content: center;
    }

    @media ${mq.desktop} {
        display: flex;
        justify-content: center;
    }

`;