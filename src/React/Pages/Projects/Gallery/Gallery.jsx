import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({ projects, catChosen }) => {

    console.log('Gallery projects', projects, catChosen);

    return (
        <GalleryStyled className='Gallery'>
            {
                projects.packages
                    .filter((item) => {
                        return (catChosen === 'All' || item.category === catChosen)
                    })
                    .map((item, idx) => {
                    return <GalleryItem key={ idx } item={ item } />
                })
            }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;