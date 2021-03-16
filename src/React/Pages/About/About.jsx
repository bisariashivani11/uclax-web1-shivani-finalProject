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
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui at mauris ut malesuada neque. In auctor eu purus, interdum convallis.<br></br>Venenatis enim orci, sit pulvinar nisi. Arcu imperdiet tristique sit porttitor a, suspendisse odio urna.</h4>
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
        justify-content: center;
    }

    h4 {
        margin-top: 100px;
        margin-bottom: 100px;
        text-align: center;
    }
       

        /* Reference for below properties.The last command gets executed when same commands with different output is coded */
        

        /*justify-content: space-between;
        justify-content: center; */
     

`;

