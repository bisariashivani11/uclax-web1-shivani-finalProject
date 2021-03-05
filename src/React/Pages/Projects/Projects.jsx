import React from 'react';

/* Components ---------------------------*/
import TopSection from './TopSection.jsx';
import FilterNav from './FilterNav.jsx';
import Gallery from './Gallery.jsx';


const Projects = () => {

    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <TopSection />
            <FilterNav />
            <Gallery />
        </div>
    );
}

export default Projects;