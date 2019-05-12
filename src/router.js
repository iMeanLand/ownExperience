import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import AdminLogin from './components/admin/guest/login';

import Header from "./components/user/ui/header";
import Footer from "./components/user/ui/footer";
import Feed from "./components/user/feed/feed";
import Groups from './components/user/groups/groups';
import Pages from './components/user/pages/pages';
import Kanban from "./components/user/modules/dashboard/Kanban";
import Profile from "./components/user/profile/profile";
import Notfound from "./components/user/404/notfound";
import Register from "./components/user/guest/register";
import Login from "./components/user/guest/login";

import About from './components/user/profile/profilecontent/about';
import Gallery from './components/user/profile/profilecontent/gallery';
import Friends from './components/user/profile/profilecontent/friends';
import ProfileGroups from './components/user/profile/profilecontent/groups';
import './css/main.css';
import Settings from "./components/user/settings/settings";
import cookies from "./cookies";

global.token = cookies.getCookie('token');

const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={(!global.token) ? Login : Feed}/>
            <Route exact path="/register" component={(global.token) ? Feed : Register}/>
            <Route exact path="/login" component={(global.token) ? Feed : Login}/>
            <Route exact path="/kanban" component={Kanban}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/pages" component={Pages}/>
            <Route exact path="/settings" component={Settings}/>
            {/*Profile Pages*/}
            <Route exact path="/profile/:username" component={Profile}/>
            <Route exact path="/profile/:username/about" component={About}/>
            <Route exact path="/profile/:username/gallery" component={Gallery}/>
            <Route exact path="/profile/:username/friends" component={Friends}/>
            <Route exact path="/profile/:username/groups" component={ProfileGroups}/>
            <Route component={Notfound}/>
        </Switch>
        <Footer/>
        <Switch>
            <Route path="/admin" component={(global.token) ? Feed : AdminLogin} />
        </Switch>
    </Router>
);


export default routing;