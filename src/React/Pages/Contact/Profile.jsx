import React from 'react';
import styled from 'styled-components';

const Profile = () => {

    return (
        <ProfileStyled className='Profile'>
            <h3>201, 202, Padma Tower 2, Rajendra Place<br></br>New Delhi</h3>
            <h3>Open<br></br> Monday to Saturday - 9:30-18:30</h3>
            <h3>Write to us at<br></br>sjarchitects@gmail.com</h3>
        </ProfileStyled>
    );
}

export default Profile;

const ProfileStyled = styled.div`
    
    background-color: #e4cfcc;
    padding: 40px;

    h3 {
        padding: 20px;
    }
`;