import React from 'react';
import styled from 'styled-components';

const Studio = () => {

    return (
        <StudioStyled className='Studio'>
            <div className='left' >
                <img src='/assets/img/About/Studio/team.png' alt='team pic'/>
                <img src='/assets/img/About/Studio/team1.png' alt='team pic'/>
            </div>

            <div className='team'>
                <h1>Studio Team</h1>
                <h3>SJ+Architects are a Delhi based group of architects and interior designers, professionals and specialists, inventors and thinkers.</h3>
                <p>It is a budding firm which started as an associate firm of Mohan and Associates,<br></br>a Meerut based firm with a practicing experience of more than 32 years.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui at mauris ut malesuada neque. In auctor eu purus, interdum convallis.<br></br>Venenatis enim orci, sit pulvinar nisi. Arcu imperdiet tristique sit porttitor a, suspendisse odio urna.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui at mauris ut malesuada neque. In auctor eu purus, interdum convallis.<br></br>Venenatis enim orci, sit pulvinar nisi. Arcu imperdiet tristique sit porttitor a, suspendisse odio urna.</p>
            </div>
            
        </StudioStyled>
    );
}

export default Studio;

const StudioStyled = styled.div`

    .team {
        margin-top: 100px;
        margin-bottom: 120px;
        padding: 5px;
        text-align: center;
    }

    .left {
        max-width: 100%;
        height: auto;
        text-align: center;
    
    }

    img {
        margin-right: 10px;
        text-align: center;
        max-width: 100%;
    }
`;