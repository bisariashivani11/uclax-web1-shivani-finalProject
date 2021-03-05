import React from 'react';

/* Components ---------------------------*/
import Studio from './Studio.jsx';
import SideBar from './SideBar.jsx';
import Staff from './Staff.jsx';

const About = () => {

    return (
        <div className='About'>
            <h1>About</h1>
            <Studio />
            <SideBar />
            <Staff />
        </div>
    );
}

export default About;