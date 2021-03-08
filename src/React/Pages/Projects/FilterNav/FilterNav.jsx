import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx';

const FilterNav = ({ projects, catChosen, catChosenUpdate }) => {

    console.log('FilterNav projects', projects, catChosen);

    return (
        <FilterNavStyled className='FilterNav'>
            {
                projects.categories.map((category, idx) => {
                    return<FilterNavButton
                                    key={ idx }
                                    category={ category }
                                    catChosen={ catChosen }
                                    catChosenUpdate={ catChosenUpdate }
                            />
                })
            }
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
`;