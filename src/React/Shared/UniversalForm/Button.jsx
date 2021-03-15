import React from 'react';
import styled from 'styled-components';

const Button = ({ children, type }) => {

    return (
        <ButtonStyled
            className='Button'
            type={ type }
        >
            { children }
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`

    color:white;
    background-color: #5B5FA1;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;

    border: 0px;
    border-radius: 10px;
    
    &:hover {
        font-weight: bold;
        
    }
`;