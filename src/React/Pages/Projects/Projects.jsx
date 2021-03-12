import React, { useState } from 'react';

/* Scripts ---------------------------*/
import { projects } from './projectsData.js';

/* Components ---------------------------*/
import TopSection from './TopSection.jsx';
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const Projects = () => {

    const [catChosen, catChosenUpdate] = useState('All');

    // console.log('catChosen', catChosen);

    return (
        <div>
            <TopSection />
            <FilterNav
                projects={ projects }
                catChosen={ catChosen }
                catChosenUpdate={ catChosenUpdate }
            /> 
            <Gallery
                projects={ projects }
                catChosen={ catChosen }
            />
        </div>
    );
}

export default Projects;