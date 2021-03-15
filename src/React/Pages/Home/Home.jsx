import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Services from './Services/Services.jsx';
import MidSection from './MidSection.jsx';
import Client from './Client.jsx';
import Video from './Youtube/Video.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';

const Home = () => {

    return (
        <div className='Home'>

            {/* <Slideshow /> */}

            <div className="nested">
                <Tabbed />
            </div>
            <div className="nested">
                <Services />
            </div>
           
            <MidSection />
            <Client />
            <Video />   
            <Testimonials />

        </div>
    );
}

export default Home;