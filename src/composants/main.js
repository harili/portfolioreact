import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Accueil from './accueil';
import Projects from './projets';
import Contact from './contact';
import Cv from './cv';

const Main = () => ( 
    /**Si l'utilisateur nous dirige vers localhost:3000, ça nous dirige vers la page d'accueil */
    <Switch>
        <Route path={process.env.PUBLIC_URL + '/'}></Route>
        <Route exact path="/accueil" component ={Accueil}></Route> 
        <Route exact path="/projets" component ={Projects}></Route>
        <Route exact path="/contact" component ={Contact}></Route>
        <Route exact path="/cv" component ={Cv}></Route>
        
    </Switch>
);

export default Main;