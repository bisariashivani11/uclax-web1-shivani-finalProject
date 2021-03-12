import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../common/media_queries.js';

/* Components ---------------------------*/ 
import Lightbox from '../../Shared/Lightbox/Lightbox.jsx';

const StaffMember = ({ member }) => {

    const [showLightbox, showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <div onClick={ handleOnShow }>
                <img src={ member.image } alt={ member.name } />
                <h3>{ member.name }</h3>
            </div> 

            <Lightbox
                show={ showLightbox }
                onHide={ handleOnHide }
                width='300px'
            >
                <img src={ member.image } alt={ member.name } />
                <h3>{ member.name }</h3>
                <h4>{ member.profile }</h4>
                <h5>{ member.description }</h5>
            </Lightbox>

        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    

     /* flex: 1; */
    width: 100px; margin: 10px;

    @media ${mq.tablet} {
        width: 100px; margin: 15px;
    }

    @media ${mq.desktop} {
        width: 200px; margin: 20px;
    }

    img {
        max-width: 100%; display: block;
    }

    h3 {
        margin: 0px;
        color: white;
        background-color: #5B5FA1;
        font-size: 16px;
        padding: 5px;
    }

    h4 {
        margin: 0px;
        color:#474646;
    }
    

`;