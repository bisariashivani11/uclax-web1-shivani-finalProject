import React from 'react';
import styled from 'styled-components';

const Client = () => {

    return (
        <ClientStyled className='Client'>
            <h1>Our Clients</h1>
            <img src='/assets/img/Home/Clients/clients.png' alt='Our Clients'/>
        </ClientStyled>
    );
}

export default Client;

const ClientStyled = styled.div`
justify-content: center;
text-align: center;
margin-top: 150px;

    img {
            width: 100%;
        
            max-width: 700px;;
          
        }
`;