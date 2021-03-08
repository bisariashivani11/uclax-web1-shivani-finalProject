import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';


const Light = ({children}) => {
    return (
        <LightStyled className='Light'>
            <button className='close'>
                <FontAwesomeIcon icon={ faTimes } />
            </button>
            { children }
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`

    background-color: white;
    padding: 20px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 500px;

    button.close {
        background-color: #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;

        margin: 0px;
        padding: 0px;
        border: none;

        box-shadow: 3px 0px 10px rgba(0,0,0,.5);

        cursor: pointer;

        position: absolute;
        right: -10px;
        top: -10px;

    }
    
`;