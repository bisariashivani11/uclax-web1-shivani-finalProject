import React from 'react';
import styled from 'styled-components';


const FilterNavButton = ({ category, catChosen, catChosenUpdate }) => {

    const handleCatUpdate = () => {
        catChosenUpdate(category);
    }

    const theClassName = (category === catChosen)
        ? `FilterNavButton active`
        : `FilterNavButton`

    return (
        <FilterNavButtonStyled className={ theClassName }>
            <button
                onClick={ handleCatUpdate }
            >
                { category } 
            </button>
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
 button {
        color: #3a3838;
        line-height: 50px;
        display: inline-block;
        width: 150px;
        background-color: #F7E5DE;
        
        margin: 0px 10px;
        text-align: center;
  
        font-size: 18px;
        cursor: pointer;
        border: 1px solid #333232;
        border-radius: 10px;
    }

    &.active {
        button {
            color:white;
            background-color: #5B5FA1;
            border: 0px;

        }
    }
    
    &:hover {
        button {
            font-weight: bold;
        }
        
    }
`;