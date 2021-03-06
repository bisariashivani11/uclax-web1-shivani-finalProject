import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';


const TabbedNavItem = ({tabItem, changeTabs, chosenTab}) => {

    console.log('tabItem', tabItem.title, chosenTab.title);

    const handleTabClick = () => {
        changeTabs(tabItem);
    }

    const theClassName = classnames({
        'TabbedNavItem': true,
        'active': tabItem.title === chosenTab.title,
    });

    return (
        <TabbedNavItemStyled
            className={ theClassName }
            onClick={ handleTabClick }
        >
            { tabItem.title }
        </TabbedNavItemStyled>
    );
}

export default TabbedNavItem;

const TabbedNavItemStyled = styled.div`
    
    color: #a7a4a4;
    line-height: 50px;
    display: inline-block;
    width: 300px;
    text-align: center;
    margin-right: 17px;
    font-size: 24px;
    cursor: pointer;

    background-color: white;
    border: 1px solid #333232;

    &.active {
        color:white;
        background-color: #5B5FA1;
        border: 0px;

    }

    &:hover {
        color: #3a3939;
        border: 0px;
        border: 1px solid #333232;
        
    }
    
`;