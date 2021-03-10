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
padding: 20px;

    .Nav {
        display: flex;
        width: 500px;
    }

    a {
        flex: 1;
        text-align: center;
        display: inline;
        color: grey;
        text-decoration: none;

        padding: 10px;
        margin: 0px 5px;

        &.active {
            color: #5B5FA1;
            font-weight: bold;
        }
        &:hover {
            color: dark grey;
            font-weight: bold;
        }
    }
`;