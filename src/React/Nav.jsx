import React from 'react';
import styled from 'styled-components';

const Nav = () => {

    return (
        <NavStyled className="Nav">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    a {
        background-color: #fff;
        color: grey;
        text-decoration: none;

        padding: 10px;
        margin: 10px;

    }

`;
