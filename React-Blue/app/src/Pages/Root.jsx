import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Movie from './Movie/Movie'
import Home from './Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/movie/:id' component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}
