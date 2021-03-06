import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/moon.png');

    const imageOver =() => {
        imageSrcUpdate('/assets/img/sun.png') 
    }
    const imageOut=() => {
        imageSrcUpdate('/assets/img/moon.png')
    }


    return (
        <SunAndMoonStyled className='SunAndMoon'>
            <img
                src={ imageSrc }
                alt='The Sun And Moon'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            />
        </SunAndMoonStyled>
    );
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    margin-top: 200px;
    margin-bottom: 0px;
`;