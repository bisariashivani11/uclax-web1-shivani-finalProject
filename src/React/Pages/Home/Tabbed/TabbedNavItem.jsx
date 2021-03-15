import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';


const TabbedNavItem = ({tabItem, changeTabs, chosenTab}) => {

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
    
    color: #3a3838;
    line-height: 50px;
    display: inline-block;
    width: 150px;
    background-color: #F7E5DE;
    text-align: center;
    margin-right: 17px;
    margin-bottom: 17px;
    font-size: 18px;
    cursor: pointer;

    border: 1px solid #333232;
    border-radius: 10px;

    &.active {
        color:white;
        background-color: #5B5FA1;
        border: 0px;

    }

    &:hover {
        font-weight: bold;
        
    }
    
`;