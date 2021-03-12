import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { testimonial } from './testimonial_data.js';

/* Components ---------------------------*/
import TestimonialEach from './TestimonialEach.jsx';

const Testimonials = () => {

    return (
        <TestimonialsStyled className='Testimonials'>
           <h1>Client Testimonials </h1>
           <h3>Whether it’s a living environment or work environment,<br></br> all our clients are highly invested in their projects.</h3> 

           <div className='ttypes'>
                {
                    testimonial.map((ttype, idx) => {
                        return <TestimonialEach key={ idx } ttype={ ttype } />
                    })
                }
            </div>
        </TestimonialsStyled>
    );
}

export default Testimonials;

const TestimonialsStyled = styled.div`

margin-top: 100px;
h1, h3 {
    text-align: center;
}
    
.ttypes {
    margin-top: 70px;
    text-align: center;
}
`;