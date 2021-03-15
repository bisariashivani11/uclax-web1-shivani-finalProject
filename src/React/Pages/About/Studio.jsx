import React from 'react';
import styled from 'styled-components';

const Studio = () => {

    return (
        <StudioStyled className='Studio'>
            <div className='left' >
                <img src='/assets/img/About/Studio/team.png' alt='team pic'/>
            </div>

            <div className='team'>
                <h1>Studio Team</h1>
                <h3>SJ+Architects are a Delhi based group of architects and interior designers, professionals and specialists, inventors and thinkers.</h3>
                <p>It is a budding firm which started as an associate firm of Mohan and Associates,<br></br>a Meerut based firm with a practicing experience of more than 32 years.</p>
            </div>
            
        </StudioStyled>
    );
}

export default Studio;

const StudioStyled = styled.div`

    .team {
        margin-top: 100px;
        margin-bottom: 200px;
        margin-top: 150px;
        text-align: center;
    }

    .left {
        max-width: 100%;
        height: auto;
        text-align: center;

    
    }
`;