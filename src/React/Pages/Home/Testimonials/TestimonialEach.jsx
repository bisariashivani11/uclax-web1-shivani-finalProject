import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

const TestimonialEach = ({ttype}) => {

    return (
        <TestimonialEachStyled className='TestimonialEach'>
            <div className='wrapper'>
                <p>{ ttype.description }</p>
                <h4>{ ttype.name }</h4>
                <h5>{ ttype.profile }</h5>
            </div>
        </TestimonialEachStyled>
    );
}

export default TestimonialEach;

const TestimonialEachStyled = styled.div`
    display: flex;
    max-width: 100%;
    padding: 5px;
    text-align: left;

    .wrapper {
        background-color: #F5F4FF;
        margin: 15px;
        padding: 15px;
        
    }

    h4, h5 {
        margin: 3px;
    }

    @media ${mq.tablet} {
        display: inline-flex;
        width: 350px;
        margin: auto;
        
    }

    @media ${mq.desktop} {
        display:inline-block;
        width: 450px;
        margin: auto;
    }
    
`;