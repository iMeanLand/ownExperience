import React from 'react';
import Sidebar from '../sidebar/settings/sidebar';
import SettingsContent from './settingscontent/settingscontent';
import Auth from "../../../helpers/Auth";

class AdminSettings extends React.Component {

    componentWillMount() {
        Auth.redirectIfNotAdminAuthenticated();
    }

    render() {

        return (
            <div className="Container">
                <SettingsContent/>
                <Sidebar/>
            </div>

        );
    }

}

export default AdminSettings;
