import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { servicesType } from './servicesType.js';

/* Components ---------------------------*/
import ServiceType from './ServiceType.jsx';

// 'stype' below is for service type used as just a reference

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Our Services</h1>

            <div className='stypes'>
                {
                    servicesType.map((stype, idx) => {
                        return <ServiceType key={ idx } stype={ stype } />
                    })
                }
            </div>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
    background-color: white;
    padding: 25px;
    margin: 50px 10px;

    .stypes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
`;