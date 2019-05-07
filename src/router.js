import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Feed from "./components/feed/feed";
import Groups from './components/groups/groups';
import Pages from './components/pages/pages';
import Kanban from "./components/modules/dashboard/Kanban";
import Profile from "./components/profile/profile";
import Notfound from "./components/404/notfound";
import './css/main.css';

const routing = (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/kanban" component={Kanban}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/pages" component={Pages}/>
            <Route component={Notfound}/>
        </Switch>
        <Footer />
    </Router>
);


export default routing;