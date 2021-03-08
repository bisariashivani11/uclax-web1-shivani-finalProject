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
            <div className='piece' onClick={ handleOnShow }>
                <img src={ item.image } alt={ item.title }/>
                <h2>{ item.title }</h2>
                <h3>{ item.place }</h3>
                <h4>{ item.category }</h4>
            </div>

            <Lightbox
                show={ showLightbox }
                onHide={ handleOnHide }
            >
                <img src={ item.image } alt={ item.title }/>
                <h2>{ item.title }</h2>
                <h3>{ item.place }</h3>
                <h4>{ item.category }</h4>
            </Lightbox>

        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    margin: 10px;

    .piece { 
        h2.galleryH2 {
            position: absolute;
            bottom: 0px; left:0px; right:0px;
            background-color: #fff;
            margin: 0px;
            padding: 5px;
        }

        h3.galleryH3 {
            position: absolute;
            bottom: 0px; left: 0px; right: 0px;
            text-align: right;
            margin: 0px;
            padding: 5px;
        }

        h4.galleryH4 {
            position: absolute;
            top: 0px; left:0px; right:0px;
            text-align: right;
            background-color: #fff;
            margin: 0px;
            padding: 5px;
        }
    }

    .Lightbox {
        h2 {
            background-color: #5B5FA1;
            color: white;
            padding: 10px;
            margin: 0px;
        }
    }
    
`;