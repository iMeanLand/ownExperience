import React from 'react';
import Sidebar from '../sidebar/settings/sidebar';
import SettingsContent from './settingscontent/settingscontent';

class Settings extends React.Component {

    render() {
        return (
            <div className="Container">
                <SettingsContent/>
                <Sidebar/>
            </div>

        );
    }

}

export default Settings;
