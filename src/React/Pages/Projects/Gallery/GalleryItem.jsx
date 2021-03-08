import React, { useState } from 'react';
import styled from 'styled-components';


/* Components ---------------------------*/ 
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const GalleryItem = ({ item }) => {

    const [showLightbox, showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);

    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div onClick={ handleOnShow }>
                <img src={ item.image } alt={ item.title }/>
                {/* <h2>{ item.title }</h2> */}
                <h3>{ item.place }</h3>
                <h4>{ item.category }</h4>
            </div>

            <Lightbox
                show={ showLightbox }
                onHide={ handleOnHide }
            >
                { item.title }
            </Lightbox>

        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    margin: 10px;

    h2 {
        position: absolute;
        bottom: 0px; left:0px; right:0px;
        background-color: #fff;
        margin: 0px;
        padding: 5px;
    }

    h3 {
        position: absolute;
        bottom: 0px; left: 0px; right: 0px;
        text-align: right;
        margin: 0px;
        padding: 5px;
    }

    h4 {
        position: absolute;
        top: 0px; left:0px; right:0px;
        text-align: right;
        background-color: #fff;
        margin: 0px;
        padding: 5px;
    }
    
`;