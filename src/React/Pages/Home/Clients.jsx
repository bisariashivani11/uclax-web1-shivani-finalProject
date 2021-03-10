import React from 'react';
import styled from 'styled-components';

const Clients = () => {

    return (
        <ClientsStyled className='Clients'>
            <h2>Our Clients</h2> 
            <img src='/assets/img/Home/Clients/clients.png' alt='Project'/>

        </ClientsStyled>
    );
}

export default Clients;

const ClientsStyled = styled.div`

    width: 100%;
    min-width: 350px;
    display: flex;
    padding: 100px auto;

    justify-content: center;

    h2{
        justify-content: center;

    }
`;