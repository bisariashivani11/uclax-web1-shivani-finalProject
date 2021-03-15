import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import SunAndMoon from './SunAndMoon.jsx';
import LoginForm from './LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>

            <SunAndMoon />
            <LoginForm />
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

text-align: center;
margin-bottom: 0px;
    
`;