import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

/* Components ---------------------------*/ 
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const GalleryItem = ({ item }) => {

    const [showLightbox, showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
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
                width='500px'
            >
                <img src={ item.image } alt={ item.title }/>
                <h2>{ item.title }</h2>
                <h3>{ item.place }</h3>
            
            </Lightbox>

        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`

    position: relative;
    margin-bottom: 60px;
    padding: 5px;
    display: flex;

    .piece { 
            max-width: 100%;
            height: auto;
        
            img {
            width: 100%;
            }
            
        h2 {
            position: absolute;
            bottom: 0px; left: 0px; right: 0px;
            background-color: #fff;
            margin: 0x;
            padding: 5px;
            
        }

        h3 {
            position: absolute;
            bottom: -10px; left: 0px; right: 0px;
            margin: 0px;
            padding: 5px;
            background-color: #fff;
        
        }

        h4 {
            position: absolute;
            top: 0px; left:0px; right:0px;
            margin: 0px;
            padding: 5px;
            background-color: #fff;
            text-align: right;
            }
        }

        @media ${mq.tablet} {
            .piece {
                text-align: center;
                max-width: 100%;
            }
        }

        @media ${mq.desktop} {
            .piece {
                text-align: left;
            }
        }

    .Lightbox {

        h2 {
            background-color: #5B5FA1;
            color: white;
            padding: 10px;
            margin: 0px;
        }

        h3 {
            margin-left: 15px;
        }

    }
    
`;