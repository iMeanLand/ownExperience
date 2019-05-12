import React from 'react';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom'

import AdminLogin from './components/admin/guest/login';
import AdminDashboard from './components/admin/dashboard/dashboard';
import AdminSettings from './components/admin/settings/settings';

import Feed from "./components/user/feed/feed";
import Groups from './components/user/groups/groups';
import Pages from './components/user/pages/pages';
import Kanban from "./components/modules/dashboard/Kanban";
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
import Auth from './helpers/Auth';
import UserLayout from "./components/user/ui/layout";
import AdminLayout from "./components/admin/ui/layout";

const userRouting = (
    <Router>
        <UserLayout>
            <Route exact path="/" component={(!Auth.isAuthenticated) ? Login : Feed}/>
            <Route path="/register" component={(!Auth.isAuthenticated) ? Feed : Register}/>
            <Route path="/login" component={(!Auth.isAuthenticated) ? Feed : Login}/>
            <Route path="/kanban" component={Kanban}/>
            <Route path="/groups" component={Groups}/>
            <Route path="/pages" component={Pages}/>
            <Route path="/settings" component={Settings}/>
            {/*Profile Pages*/}
            <Route exact path="/profile/:username" component={Profile}/>
            <Route exact path="/profile/:username/about" component={About}/>
            <Route exact path="/profile/:username/gallery" component={Gallery}/>
            <Route exact path="/profile/:username/friends" component={Friends}/>
            <Route exact path="/profile/:username/groups" component={ProfileGroups}/>
            <Route path='/404' component={Notfound} />
            {/*<Redirect from='*' to='/404' />*/}
        </UserLayout>
    </Router>
);

const adminRouting = (
    <Router>
        <AdminLayout>
            <Route exact path="/admin" component={(!Auth.isAdminAuthenticated) ? AdminLogin : AdminDashboard}/>
            <Route exact path="/admin/dashboard" component={AdminDashboard}/>
            <Route path="/admin/settings" component={AdminSettings}/>
        </AdminLayout>
    </Router>
);

const routes = [
    userRouting,
    adminRouting
];

export {
    routes
}