import React from 'react';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'

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
import Advertisement from './components/user/advertisements/advertisements';
import Info from "./components/user/advertisements/content/info";
import Publish from "./components/user/advertisements/content/publish";

const onlyForAdmins = [
    '/admin/dashboard',
    '/admin/settings'
];

const onlyForUsers = [
    '/',
    '/advertisements',
    '/advertisements/info',
    '/advertisements/publish',
];

const onlyForGuests = [
    '/login',
    '/register',
    '/admin'
];

const userRouting = (
    <Router>
        <UserLayout>
            <Route exact path={onlyForUsers} render={() => (
                Auth.isAuthenticated ? (
                    null
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
            <Route exact path={onlyForGuests} render={() => (
                Auth.isAuthenticated ? (
                    <Redirect to="/"/>
                ) : (
                    null
                )
            )}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/kanban" component={Kanban}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/pages" component={Pages}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/advertisements/info" component={Info}/>
            <Route exact path="/advertisements/publish" component={Publish}/>
            <Route exact path="/advertisements" component={Advertisement}/>
            {/*Profile Pages*/}
            <Route exact path="/profile/:username" component={Profile}/>
            <Route exact path="/profile/:username/about" component={About}/>
            <Route exact path="/profile/:username/gallery" component={Gallery}/>
            <Route exact path="/profile/:username/friends" component={Friends}/>
            <Route exact path="/profile/:username/groups" component={ProfileGroups}/>
            <Route exact path="/" component={Feed}/>
            <Route path='/404' component={Notfound} />
            {/*<Redirect from='*' to='/404' />*/}
        </UserLayout>
        <AdminLayout>
            <Route exact path={onlyForAdmins} render={() => (
                !Auth.isAdminAuthenticated ? (
                    <Redirect to="/login"/>
                ) : (
                    null
                )
            )}/>
            <Route exact path={onlyForGuests} render={() => (
                Auth.isAdminAuthenticated ? (
                    <Redirect to="/admin/dashboard"/>
                ) : (
                    null
                )
            )}/>
            <Route exact path="/admin/dashboard" component={AdminDashboard}/>
            <Route exact path="/admin/settings" component={AdminSettings}/>
            <Route exact path="/admin" component={AdminLogin}/>
        </AdminLayout>
    </Router>
);

const routes = [
    userRouting
];

export {
    routes
}