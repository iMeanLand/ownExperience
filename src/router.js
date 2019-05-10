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
import Register from "./components/guest/register";
import Login from "./components/guest/login";

import About from './components/profile/profilecontent/about';
import Gallery from './components/profile/profilecontent/gallery';
import Friends from './components/profile/profilecontent/friends';
import ProfileGroups from './components/profile/profilecontent/groups';
import './css/main.css';
import Settings from "./components/settings/settings";

const routing = (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ (!token) ? Login : Feed }/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/kanban" component={Kanban}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/pages" component={Pages}/>
            <Route exact path="/settings" component={Settings}/>
            {/*Profile Pages*/}
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/profile/about" component={About}/>
            <Route exact path="/profile/gallery" component={Gallery}/>
            <Route exact path="/profile/friends" component={Friends}/>
            <Route exact path="/profile/groups" component={ProfileGroups}/>
            <Route component={Notfound}/>
        </Switch>
        <Footer />
    </Router>
);


export default routing;