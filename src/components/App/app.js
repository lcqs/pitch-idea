import React from 'react';
import './styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {form as Form} from '../../components/Form/form';
import {home as Home} from '../../components/Home/home';
import  Profiles from '../../components/Profiles/profiles';
import {about as About} from '../../components/About/about';
import {categories as Categories} from '../../components/Categories/categories';

const app = () =>{   
    return(
        <Router>
            <Switch>
                <Route path="/Pitch">
                    <Form/>
                </Route>
                <Route path='/profiles'>
                    <Profiles/>
                </Route>    
                <Route path='/categories'>
                    <Categories/>
                </Route>    
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
};

export default app;