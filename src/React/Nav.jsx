import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    return (
        <NavStyled className="Nav">
            <FontAwesomeIcon icon={ faBars } />

            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    a {
        color: grey;
        text-decoration: none;

        padding: 10px;
        margin: 10px;

        &.active {
            color: #5B5FA1;
            font-weight: bold;
        }
    }

`;
