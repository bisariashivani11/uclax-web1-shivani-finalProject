import React from 'react';
import styled from 'styled-components';

const TopSection = () => {

    return (
        <TopSectionStyled className='TopSection'>
            <div className='top' >
                <h2>We create projects that seamlessly<br></br>synchronize beauty and economy.</h2>
            </div>
        </TopSectionStyled>
    );
}

export default TopSection;

const TopSectionStyled = styled.div`

height: 400px;

background-image: url('/assets/img/Projects/TopSection/top image.png');
background-position: center center;
background-size: cover;

position: relative;

.top {
    max-width: 100%;
    text-align: center;
    }

    h2 {
        position: absolute;
        top: 70px; left: 30px;
        color: #fff;
        background-color:  rgba(24, 14, 14, 0.66);
        text-align: left;
        justify-content: center;
        margin: 0px;
        padding: 5px;
        }
`;