import React from 'react';
import styled from 'styled-components';

const TopSection = () => {

    return (
        <TopSectionStyled className='TopSection'>
             <div className='Top'>
                <img src='/assets/img/Projects/TopSection/ProjectTop.png' alt='Project Interior'/>
            </div>
        </TopSectionStyled>
    );
}

export default TopSection;

const TopSectionStyled = styled.div`
    position: relative;

    height: 300px;
    width: 100%;
    max-width: 100%;
    text-align: center;


`;

