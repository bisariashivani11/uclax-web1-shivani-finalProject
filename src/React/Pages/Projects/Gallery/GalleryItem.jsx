import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({ item }) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
            <img src={ item.image } alt={ item.title } />
            <h2>{ item.title }</h2>
            <h3>{ item.place }</h3>
            <h4>{ item.category }</h4>
            
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