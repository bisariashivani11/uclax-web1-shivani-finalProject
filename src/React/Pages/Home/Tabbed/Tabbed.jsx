import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tabItems } from './tabbed_data.js';

/* Components ---------------------------*/
import TabbedContent from './TabbedContent.jsx';
import TabbedNav from './TabbedNav.jsx';

const Tabbed = () => {

    
    const [ chosenTab, chosenTabUpdate ] =useState(tabItems[0]);

    const changeTabs = () => {
        chosenTabUpdate(tabItems[1])
    }

    return (
        <TabbedStyled className='Tabbed'>
            <TabbedContent chosenTab={ chosenTab } />
            <TabbedNav changeTabs={ changeTabs } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;