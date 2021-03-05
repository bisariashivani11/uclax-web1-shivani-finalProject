import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Pages/Home/Home.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Login.jsx';

const Main = () => {

    return (
        <main>
            <Switch>
                <Route path='/projects' component={ Projects } />
                <Route path='/about' component={ About } />
                <Route path='/contact' component={ Contact } />
                <Route path='/login' component={ Login } />
                <Route path='/' component={ Home } exact/>
            </Switch>
        </main>
    );
}

export default Main;
