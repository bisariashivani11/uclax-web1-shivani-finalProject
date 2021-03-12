import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

display: flex;
justify-content: center;
background-color: #fff;
padding: 20px;
margin-bottom: 20px;


    .Nav {
        display: flex;
        width: 500px;

        /* position: absolute;
        right: 50px;
        top: 120px;
        z-index: 1001;
        background-color: #fff; */
    }

    a {
        flex: 1;
        text-align: center;
        display: block;
        background: #fff;
        color: grey;
        text-decoration: none;
       

        padding: 10px;
        margin: 0px 5px;

        &.active {
            color: #5B5FA1;
            font-weight: bold;
            box-shadow: 0px 2px;
        }
        &:hover {
            color: dark grey;
            font-weight: bold;
        }
    }
`;