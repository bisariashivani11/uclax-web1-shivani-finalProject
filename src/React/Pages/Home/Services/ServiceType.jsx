import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';



const ServiceType = ({stype}) => {

    return (
        <ServiceTypeStyled className='ServiceType'>
            <img src={ stype.image } alt="Service Type" />
            <h3>{ stype.name }</h3>
            <p>{ stype.description }</p>
            
        </ServiceTypeStyled>
    );
}

export default ServiceType;

const ServiceTypeStyled = styled.div`

    margin: 10px;
    width: 200px;
    justify-content: center;

    /* width: 10%; */
 

    @media ${mq.tablet} {
        width: 150px; margin: 5px;
    }

    @media ${mq.desktop} {
        width: 200px; margin: 10px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    h3 {
        color: grey;
        font-size: 20px;
        background-color: white;

    }
`;