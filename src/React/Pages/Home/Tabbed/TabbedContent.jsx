import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

const TabbedContent = ({chosenTab}) => {

    console.log('TabbedContent chosenTab', chosenTab);


    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className="left">
                <img src={ chosenTab.image } alt='Tab Vision' />
            </div>
            <div className="right">
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text } } />
            </div>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    padding-top: 20px;

    @media ${mq.desktop} {
        display: flex;
    }

    .left {
        flex: 3;
        img { max-width: 100%; }
    }

    .right {
        flex: 2;
        padding: 0px 20px;
    }

    @media ${mq.desktop} {
        .right {
            padding: 0px 20px;
        }
    }

    
`;