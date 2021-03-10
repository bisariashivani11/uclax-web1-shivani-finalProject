import React from 'react';
import styled from 'styled-components';

const Button = () => {

    return (
        <ButtonStyled className='Button'>
            Button 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`

    background-color: #807aca;
    color: white;
    padding: 10px 20px;
    font-size: 18px;

    border-radius: 5px;
    border: solid 3px #c4c4c4;
    
`;