import React from 'react';
import styled from 'styled-components';

const TopSection = () => {

    return (
        <TopSectionStyled className='TopSection'>
            <h1>dhjd</h1>
        </TopSectionStyled>
    );
}

export default TopSection;

const TopSectionStyled = styled.div`

    height: 300px;

    background-image: url('/assets/img/Projects/TopSection/ProjectTop.png');
    background-position: center center;
    background-size: cover;

`;