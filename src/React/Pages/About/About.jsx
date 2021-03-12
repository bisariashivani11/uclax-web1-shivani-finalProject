import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { staffData } from './staffData.js';

/* Components ---------------------------*/
import Studio from './Studio.jsx';
import StaffMember from './StaffMember.jsx';

const About = () => {

    return (
        <AboutStyled className='About'>
        
            <Studio />
            <div className='members'>
                {
                    staffData.map((member, idx) => {
                        return <StaffMember key={ idx } member={ member } />
                    })
                    
                }
            </div>
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`
    padding: 25px;
    margin-bottom: 0px;

    .members {
        display: flex;
        flex-wrap: wrap;
        background-color: #e4cfcc;
       

        /* Reference for below properties.The last command gets executed when same commands with different output is coded */
        justify-content: center;

        /*justify-content: space-between;
        justify-content: center; */
     }

`;

